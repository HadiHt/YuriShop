using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface IShopRepo
    {
        IEnumerable<Shop> GetAllShops();
        Shop GetShopById(int id);
        Shop GetShopByEmail(string email);
        Shop GetShopByUsername(string username);
        void CreateShop(Shop shop);
        void UpdateShop(Shop shop);
        void DeleteShop(Shop shop);
        bool SaveChanges();
    }
}
