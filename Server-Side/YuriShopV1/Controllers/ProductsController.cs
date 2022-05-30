using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using YuriShopV1.Data.Users;
using YuriShopV1.Dtos.Products;
using YuriShopV1.Dtos.WishLists;
using YuriShopV1.Models;

namespace YuriShopV1.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ICardRepo _cardRepo;
        private readonly IPurchaseRepo _orderRepo;
        private readonly IUserRepo _userRepo;
        private readonly IProductRepo _productRepo;
        private readonly UsersController _usersController;
        private readonly IWishListRepo _wishlistRepo;

        public ProductsController(IMapper mapper, ICardRepo cardRepo, IPurchaseRepo orderRepo, IUserRepo userRepo, IProductRepo productRepo, UsersController usersController, IWishListRepo wishlistRepo)
        {
            _mapper = mapper;
            _cardRepo = cardRepo;
            _orderRepo = orderRepo;
            _userRepo = userRepo;
            _productRepo = productRepo;
            _usersController = usersController;
            _wishlistRepo = wishlistRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ProductReadDto>> GetAllProducts()
        {
            var Products = _productRepo.GetAllProducts();
            return Ok(_mapper.Map<IEnumerable<ProductReadDto>>(Products));
        }

        [HttpGet("Recommended/{id}")]
        public async Task<string> GetRecommendedProducts(int id)
        {
            var wishlist = _wishlistRepo.GetAllWishListsByUserId(id);
            if (wishlist != null)
            {
                var client = new HttpClient();
                var productID = _mapper.Map<IEnumerable<WishListReadDto>>(wishlist).First().ProductRefId;
                var response = await client.GetAsync($"http://127.0.0.1:8000/{productID}");

                var result = await response.Content.ReadAsStreamAsync();
                result.Position = 0;
                var streamReader = new StreamReader(result);
                var pythonResult = streamReader.ReadToEnd();
                return pythonResult;
            }
            return null;

        }

        [HttpGet("{id}", Name ="GetProductById")]
        public ActionResult<ProductReadDto> GetProductById(int id)
        {
            var Product = _productRepo.GetProductById(id);
            if (Product != null)
            {
                return Ok(_mapper.Map<ProductReadDto>(Product));
            }
            return NotFound();
        }
        [HttpPost("list/products")]
        public ActionResult<IEnumerable<ProductReadDto>> GetProductsByIds(List<int> id)
        {
            var Products = _productRepo.GetProductsByIds(id);
            if (Products != null)
            {
                return Ok(_mapper.Map<IEnumerable<ProductReadDto>>(Products));
            }
            return NotFound();
        }
        [HttpGet("name/{name}")]
        public ActionResult<IEnumerable<ProductReadDto>> GetAllProductsByName(string name)
        {
            var Product = _productRepo.GetAllProductsByName(name);
            if (Product != null)
            {
                return Ok(_mapper.Map<IEnumerable<ProductReadDto>>(Product));
            }
            return NotFound();
        }
        [HttpGet("{id}/shop")]
        public ActionResult<IEnumerable<ProductReadDto>> GetAllProductsByShopId(int id)
        {
            var Products = _productRepo.GetAllProductsByShopId(id);
            if (Products != null)
            {
                return Ok(_mapper.Map<IEnumerable<ProductReadDto>>(Products));
            }
            return NotFound();
        }
        [HttpGet("Category/{category}")]
        public ActionResult<IEnumerable<ProductReadDto>> GetAllProductsByCategory(string Category)
        {
            var Products = _productRepo.GetAllProductsByCategory(Category);
            if (Products != null)
            {
               return Ok(_mapper.Map<IEnumerable<ProductReadDto>>(Products));
            }
            return NotFound();
        }
        [HttpPost("product")]
        public ActionResult<ProductReadDto> CreateOrder(ProductWriteDto product)
        {
            var ProductModel = _mapper.Map<Product>(product);
            _productRepo.CreateProduct(ProductModel);
            _productRepo.SaveChanges();

            var productReadDto = _mapper.Map<ProductReadDto>(ProductModel);
            return CreatedAtRoute(nameof(GetProductById), new { Id = productReadDto.ProductId }, productReadDto);
        }
        [HttpPut("{id}/product")]
        public ActionResult UpdateProduct(int id, ProductUpdateDto product)
        {
            var ProductModelFromRepo = _productRepo.GetProductById(id);
            if (ProductModelFromRepo == null)
            {
                return NotFound();
            }
            _mapper.Map(product, ProductModelFromRepo);
            _productRepo.UpdateProduct(ProductModelFromRepo);
            _productRepo.SaveChanges();

            return NoContent();
        }
        [HttpDelete("{id}/product")]
        public ActionResult DeleteProduct(int id)
        {
            var ProductModelFromRepo = _productRepo.GetProductById(id);
            if (ProductModelFromRepo == null)
            {
                return NotFound();
            }
            _productRepo.DeleteProduct(ProductModelFromRepo);
            _productRepo.SaveChanges();

            return NoContent();
        }
    }
}
