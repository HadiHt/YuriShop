using System;
using System.Collections.Generic;
using System.Linq;
using YuriShopV1.Data.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Orders
{
    public class SqlPurchaseRepo : IPurchaseRepo
    {
        private readonly YuriShopContext _context;

        public SqlPurchaseRepo(YuriShopContext context)
        {
            _context = context;
        }
        public IEnumerable<Purchase> GetAllPurchases()
        {
            return _context.Purchase.ToList();
        }

        //public IEnumerable<OrderJoinedPurchases> GetAllOrdersByUserId(int id)
        //{
        //    // var purchases = _context.Purchase.Where(p => p.OrderRefId == Orders).ToList();
        //    //// var Orders = _context.Order.Where(p => p.UserRefId == id).ToList();
        //    //// var purchases = _context.Purchase.Where(p => p.OrderRefId == Orders).ToList();
        //    // var order = (from p in _context.Order
        //    //              join e in _context.Purchase
        //    //              on p.OrderId equals e.OrderRefId
        //    //              select new OrderJoinedPurchases
        //    //              {
        //    //                  OrderId = p.OrderId,
        //    //                  OrderState = p.OrderState,
        //    //                  TimeCreated = p.TimeCreated,
        //    //                  UserRefId = p.UserRefId,
        //    //                  Purchases = e
        //    //              });.ToList();
        //    // return order;
        //    //return _context.Order.Where(p => p.UserRefId == id).ToList();
        //}

        public Purchase GetPurchaseById(int id)
        {
            return _context.Purchase.FirstOrDefault(p => p.PurchaseId == id);
        }

        public void CreatePurchase(Purchase purchase)
        {
            if (purchase == null)
            {
                throw new ArgumentNullException(nameof(purchase));
            }
            _context.Purchase.Add(purchase);
        }
        //public void UpdateOrder(Order order)
        //{
        //    if (order == null)
        //    {
        //        throw new ArgumentNullException(nameof(order));
        //    }
        //    _context.Order.Update(order);
        //}
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        public void DeletePurchase(Purchase purchase)
        {
            if (purchase == null)
            {
                throw new ArgumentNullException(nameof(purchase));
            }
            _context.Purchase.Remove(purchase);
        }
=======
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451
=======
>>>>>>> origin
=======
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451
    }
}
