using System;
using System.Collections.Generic;
using System.Linq;
using YuriShopV1.Data.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Orders
{
    public class SqlOrderRepo : IOrderRepo
    {
        private readonly YuriShopContext _context;

        public SqlOrderRepo(YuriShopContext context)
        {
            _context = context;
        }
        public IEnumerable<Order> GetAllOrders()
        {
            return _context.Order.ToList();
        }

        public IEnumerable<Order> GetAllOrdersByProductId(int id)
        {
            return _context.Order.Where(p =>p.ProductRefId == id).ToList();
        }

        public IEnumerable<Order> GetAllOrdersByUserId(int id)
        {
            return _context.Order.Where(p => p.UserRefId == id).ToList();
        }

        public Order GetOrderById(int id)
        {
            return _context.Order.FirstOrDefault(p => p.OrderId == id);
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
    }
}
