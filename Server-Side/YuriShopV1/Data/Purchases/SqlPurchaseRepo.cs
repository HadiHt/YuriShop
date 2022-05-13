using System;
using System.Collections.Generic;
using System.Linq;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Purchases
{
    public class SqlPurchaseRepo : IPurchaseRepo
    {
        private readonly YuriShopContext _context;

        public SqlPurchaseRepo(YuriShopContext context)
        {
            _context = context;
        }
        public void CreatePurchase(Purchase purchase)
        {
            if (purchase == null)
            {
                throw new ArgumentNullException(nameof(purchase));
            }
            _context.Purchase.Add(purchase);
        }

        public IEnumerable<Purchase> GetAllPurchases()
        {
            return _context.Purchase.ToList();
        }

        public IEnumerable<Purchase> GetAllPurchasesByOrderId(int id)
        {
            return _context.Purchase.Where(p => p.OrderRefId == id).ToList();
        }

        public Purchase GetPurchaseById(int id)
        {
            return _context.Purchase.FirstOrDefault(p => p.PurchaseId == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdatePurchase(Purchase purchase)
        {
            if (purchase == null)
            {
                throw new ArgumentNullException(nameof(purchase));
            }
            _context.Purchase.Update(purchase);
        }
    }
}
