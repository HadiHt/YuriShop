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
        //void UpdatePurchase(Order order);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        void DeletePurchase(Purchase purchase);
=======
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451
=======
>>>>>>> origin
=======
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451
        bool SaveChanges();
    }
}
