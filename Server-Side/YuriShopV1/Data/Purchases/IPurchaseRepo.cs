using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Purchases
{
    public interface IPurchaseRepo
    {
        IEnumerable<Purchase> GetAllPurchases();
        IEnumerable<Purchase> GetAllPurchasesByOrderId(int id);
        Purchase GetPurchaseById(int id);
        void CreatePurchase(Purchase purchase);
        void UpdatePurchase(Purchase purchase);
        bool SaveChanges();
    }
}
