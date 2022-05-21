using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using YuriShopV1.Data.Users;
using YuriShopV1.Dtos.Products;
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
        private readonly IOrderRepo _orderRepo;
        private readonly IUserRepo _userRepo;
        private readonly IProductRepo _productRepo;

        public ProductsController(IMapper mapper, ICardRepo cardRepo, IOrderRepo orderRepo, IUserRepo userRepo, IProductRepo productRepo)
        {
            _mapper = mapper;
            _cardRepo = cardRepo;
            _orderRepo = orderRepo;
            _userRepo = userRepo;
            _productRepo = productRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ProductReadDto>> GetAllProducts()
        {
            var Products = _productRepo.GetAllProducts();
            return Ok(_mapper.Map<IEnumerable<ProductReadDto>>(Products));
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
    }
}
