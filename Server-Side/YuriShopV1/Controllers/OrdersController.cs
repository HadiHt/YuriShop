using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using YuriShopV1.Data.Users;
using YuriShopV1.Dtos.Orders;
using YuriShopV1.Models;

namespace YuriShopV1.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ICardRepo _cardRepo;
        private readonly IOrderRepo _orderRepo;
        private readonly IUserRepo _userRepo;
        private readonly IProductRepo _productRepo;

        public OrdersController(IMapper mapper, ICardRepo cardRepo, IOrderRepo orderRepo, IUserRepo userRepo, IProductRepo productRepo)
        {
            _mapper = mapper;
            _cardRepo = cardRepo;
            _orderRepo = orderRepo;
            _userRepo = userRepo;
            _productRepo = productRepo;
        }
        [HttpGet]
        public ActionResult<IEnumerable<OrderReadDto>> GetAllProducts()
        {
            var orders = _orderRepo.GetAllOrders();
            return Ok(_mapper.Map<IEnumerable<OrderReadDto>>(orders));
        }
        [HttpGet("{id}")]
        public ActionResult<OrderReadDto> GetProductById(int id)
        {
            var orders = _orderRepo.GetOrderById(id);
            if (orders != null)
            {
                return Ok(_mapper.Map<OrderReadDto>(orders));
            }
            return NotFound();
        }
        [HttpGet("{id}/product")]
        public ActionResult<IEnumerable<OrderReadDto>> GetAllOrdersByShopId(int id)
        {
            var orders = _orderRepo.GetAllOrdersByProductId(id);
            if (orders != null)
            {
                return Ok(_mapper.Map<IEnumerable<OrderReadDto>>(orders));
            }
            return NotFound();
        }
        [HttpGet("{id}/user")]
        public ActionResult<IEnumerable<OrderReadDto>> GetAllOrdersByUserId(int id)
        {
            var orders = _orderRepo.GetAllOrdersByUserId(id);
            if (orders != null)
            {
                return Ok(_mapper.Map<IEnumerable<OrderReadDto>>(orders));
            }
            return NotFound();
        }
    }

}
