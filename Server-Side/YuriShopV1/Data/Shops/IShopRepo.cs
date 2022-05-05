using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface IShopRepo
    {
        IEnumerable<Shop> GetAllShops();
        Shop GetShopById(int id);
        void UpdateShop(Shop shop);
        void CreateShop(Shop shop);
        bool SaveChanges();
    }
}
