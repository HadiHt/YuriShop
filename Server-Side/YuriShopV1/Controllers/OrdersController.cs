using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using YuriShopV1.Data.Purchases;
using YuriShopV1.Data.Users;
using YuriShopV1.Dtos.Orders;
using YuriShopV1.Dtos.Purchases;
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
                return Ok(_mapper.Map<OrderReadDto>(orders));
            }
            return NotFound();
        }
        [HttpGet("{id}/purchase", Name = "GetPurchaseById")]
        public ActionResult<PurchaseReadDto> GetPurchaseById(int id)
        {
            var purchase = _purchaseRepo.GetPurchaseById(id);
            if (purchase != null)
            {
                return Ok(_mapper.Map<PurchaseReadDto>(purchase));
            }
            return NotFound();
        }
        [HttpGet("purchases/order/{id}")]
        public ActionResult<PurchaseReadDto> GetPurchasesByOrderId(int id)
        {
            var purchase = _purchaseRepo.GetAllPurchasesByOrderId(id);
            if (purchase != null)
            {
                return Ok(_mapper.Map<IEnumerable<PurchaseReadDto>>(purchase));
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
            var orders = _orderRepo.GetAllOrdersByUserId(id);
            if (orders != null)
            {
                return Ok(_mapper.Map<IEnumerable<OrderReadDto>>(orders));
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

            var PurchaseReadDto = _mapper.Map<PurchaseReadDto>(PurchaseModel);
            return CreatedAtRoute(nameof(GetPurchaseById), new { Id = PurchaseReadDto.PurchaseId}, PurchaseReadDto);
        }
        [HttpPut("{id}/order")]
        public ActionResult UpdateAddress(int id, OrderUpdateDto order)
        {
            var OrderModelFromRepo = _orderRepo.GetOrderById(id);
            if (OrderModelFromRepo == null)
            {
                return NotFound();
            }
            _mapper.Map(order, OrderModelFromRepo);
            _orderRepo.UpdateOrder(OrderModelFromRepo);
            _orderRepo.SaveChanges();

            return NoContent();
        }
    }
}