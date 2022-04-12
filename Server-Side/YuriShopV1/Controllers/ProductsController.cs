using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using YuriShopV1.Data.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ICardRepo _cardRepo;
        private readonly IOrderRepo _orderRepo;
        private readonly IUserRepo _userRepo;
        private readonly IProductRepo _productRepo;

        public ProductsController(ICardRepo cardRepo, IOrderRepo orderRepo, IUserRepo userRepo, IProductRepo productRepo)
        {
            _cardRepo = cardRepo;
            _orderRepo = orderRepo;
            _userRepo = userRepo;
            _productRepo = productRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetAllProducts()
        {
            return Ok(_productRepo.GetAllProducts());
        }
        [HttpGet("{id}")]
        public ActionResult<Product> GetProductById(int id)
        {
            return Ok(_productRepo.GetProductById(id));
        }
        [HttpGet("{id}/shop")]
        public ActionResult<IEnumerable<Product>> GetAllProductsByShopId(int id)
        {
            return Ok(_productRepo.GetAllProductsByShopId(id));
        }
        [HttpGet("/Category/{category}")]
        public ActionResult<IEnumerable<Product>> GetAllProductsByCategory(string Category)
        {
            return Ok(_productRepo.GetAllProductsByCategory(Category));
        }
    }
}
