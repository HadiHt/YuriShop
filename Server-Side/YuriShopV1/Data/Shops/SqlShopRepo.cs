using System;
using System.Collections.Generic;
using System.Linq;
using YuriShopV1.Data.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Shops
{
    public class SqlShopRepo : IShopRepo
    {
        private readonly YuriShopContext _context;

        public SqlShopRepo(YuriShopContext context)
        {
            _context = context;
        }
        public IEnumerable<Shop> GetAllShops()
        {
            return _context.Shop.ToList();
        }

        public Shop GetShopById(int id)
        {
            return _context.Shop.FirstOrDefault(p => p.ShopId == id);
        }
        public Shop GetShopByEmail(string email)
        {
            return _context.Shop.FirstOrDefault(p => p.Email == email);
        }
        public Shop GetShopByUsername(string username)
        {
            return _context.Shop.FirstOrDefault(p => p.Username == username);
        }

        public void CreateShop(Shop shop)
        {
            if (shop == null)
            {
                throw new ArgumentNullException(nameof(shop));
            }
            _context.Shop.Add(shop);
        }
        public void UpdateShop(Shop shop)
        {
            if (shop == null)
            {
                throw new ArgumentNullException(nameof(shop));
            }
            _context.Shop.Update(shop);
        }
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void DeleteShop(Shop shop)
        {
            if (shop == null)
            {
                throw new ArgumentNullException(nameof(shop));
            }
            _context.Shop.Remove(shop);
        }
    }
}
