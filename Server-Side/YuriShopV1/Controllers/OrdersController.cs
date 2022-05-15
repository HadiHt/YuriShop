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
        private readonly IPurchaseRepo _purchaseRepo;

        public OrdersController(IMapper mapper, ICardRepo cardRepo, IOrderRepo orderRepo, IUserRepo userRepo, IProductRepo productRepo, IPurchaseRepo purchaseRepo)
        {
            _mapper = mapper;
            _cardRepo = cardRepo;
            _orderRepo = orderRepo;
            _userRepo = userRepo;
            _productRepo = productRepo;
            _purchaseRepo = purchaseRepo;
        }
        [HttpGet]
        public ActionResult<IEnumerable<OrderReadDto>> GetAllOrders()
        {
            var orders = _orderRepo.GetAllOrders();
            return Ok(_mapper.Map<IEnumerable<OrderReadDto>>(orders));
        }
        [HttpGet("{id}", Name = "GetOrderById")]
        public ActionResult<OrderReadDto> GetOrderById(int id)
        {
            var orders = _orderRepo.GetOrderById(id);
            if (orders != null)
            {
                return Ok(orders);
            }
            return NotFound();
        }
        //[HttpGet("{id}/product")]
        //public ActionResult<IEnumerable<OrderReadDto>> GetAllOrdersByShopId(int id)
        //{
        //    var orders = _orderRepo.GetAllOrdersByProductId(id);
        //    if (orders != null)
        //    {
        //        return Ok(_mapper.Map<IEnumerable<OrderReadDto>>(orders));
        //    }
        //    return NotFound();
        //}
        [HttpGet("{id}/user")]
        public ActionResult<IEnumerable<OrderReadDto>> GetAllOrdersByUserId(int id)
        {
            var Order = _orderRepo.GetAllOrdersByUserId(id);
            
            if (Order != null)
            {
                //var Orders = _mapper.Map<IEnumerable<OrderReadDto>>(OrderModel);
                return Ok(Order);
            }
            return NotFound();
        }
        [HttpPost("order")]
        public ActionResult<OrderReadDto> CreateOrder(OrderWriteDto order)
        {
            var OrderModel = _mapper.Map<Order>(order);
            _orderRepo.CreateOrder(OrderModel);
            _orderRepo.SaveChanges();

            var orderReadDto = _mapper.Map<OrderReadDto>(OrderModel);
            return CreatedAtRoute(nameof(GetOrderById), new { Id = orderReadDto.OrderId }, orderReadDto);
        }
        [HttpPost("purchase")]
        public ActionResult<PurchaseReadDto> CreatePurchase(PurchaseWriteDto purchase)
        {
            var PurchaseModel = _mapper.Map<Purchase>(purchase);
            _purchaseRepo.CreatePurchase(PurchaseModel);
            _purchaseRepo.SaveChanges();
            return Ok();
        }
        [HttpPut("{id}/order")]
        public ActionResult UpdateOrder(int id, OrderUpdateDto order)
        {
            var ReadtoOrder = _orderRepo.GetOrderById(id);
            if (ReadtoOrder == null)
            {
                return NotFound();
            }
            var orderReadDto = _mapper.Map<Order>(ReadtoOrder);
            _mapper.Map(order , orderReadDto);
            _orderRepo.UpdateOrder(orderReadDto);
            _orderRepo.SaveChanges();

            return NoContent();
        }
    }
}