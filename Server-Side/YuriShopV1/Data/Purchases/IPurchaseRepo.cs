using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface IPurchaseRepo
    {
        IEnumerable<Purchase> GetAllPurchases();
        //IEnumerable<OrderJoinedPurchases> GetAllOrdersByUserId(int id);
        Purchase GetPurchaseById(int id);
        void CreatePurchase(Purchase purchase);
        void UpdatePurchase(Purchase purchase);
        void DeletePurchase(Purchase purchase);
        bool SaveChanges();
    }
}
