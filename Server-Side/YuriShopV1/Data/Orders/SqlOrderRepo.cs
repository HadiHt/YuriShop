using AutoMapper;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using YuriShopV1.Data.Users;
using YuriShopV1.Dtos.Orders;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Orders
{
    public class SqlOrderRepo : IOrderRepo
    {
        private readonly YuriShopContext _context;
        private readonly IMapper _mapper;

        public SqlOrderRepo(YuriShopContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public IEnumerable<Order> GetAllOrders()
        {
            return _context.Order.ToList();
        }

        public IEnumerable<OrderReadDto> GetAllOrdersByUserId(int id)
        {
            var orders = from p in _context.Order.Where(p => p.UserRefId == id)
                         join e in _context.Purchase
                         on p.OrderId equals e.OrderRefId

                         select new OrderReadDto
                         {
                             OrderId = p.OrderId,
                             OrderState = p.OrderState,
                             TimeCreated = p.TimeCreated,
                             Purchases = _mapper.Map < IEnumerable < PurchaseReadDto >>(_context.Purchase.Where(f => f.OrderRefId == p.OrderId).ToList()).ToList()
                         };

            Dictionary<int, OrderReadDto> NoRepetition = new Dictionary<int, OrderReadDto>();
            foreach (var order in orders)
            {
                if (NoRepetition.ContainsKey(order.OrderId)) continue;
                NoRepetition.Add(order.OrderId, order);
            }
            return NoRepetition.Values;
        }

        public OrderReadDto GetOrderById(int id)
        {
            var orders = from p in _context.Order.Where(p => p.OrderId == id)

                         select new OrderReadDto
                         {
                             OrderId = p.OrderId,
                             OrderState = p.OrderState,
                             TimeCreated = p.TimeCreated,
                             Purchases = _mapper.Map<IEnumerable<PurchaseReadDto>>(_context.Purchase.Where(f => f.OrderRefId == p.OrderId).ToList()).ToList()
                         };
            return orders.FirstOrDefault();
        }

        public void CreateOrder(Order order)
        {
            if (order == null)
            {
                throw new ArgumentNullException(nameof(order));
            }
            _context.Order.Add(order);
        }
        public void UpdateOrder(Order order)
        {
            if (order == null)
            {
                throw new ArgumentNullException(nameof(order));
            }
            _context.Order.Update(order);
        }
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public IEnumerable<Order> GetAllPurchaes()
        {
            throw new NotImplementedException();
        }

        public Order GetPurchasesById(int id)
        {
            throw new NotImplementedException();
        }

        public void CreatePurchase(Order order)
        {
            throw new NotImplementedException();
        }

        public void DeleteOrder(Order order)
        {
            if (order == null)
            {
                throw new ArgumentNullException(nameof(order));
            }
            _context.Order.Remove(order);
        }
    }
}
