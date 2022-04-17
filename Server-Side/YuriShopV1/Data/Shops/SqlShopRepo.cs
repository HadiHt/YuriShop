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

        public void CreateShop(Shop shop)
        {
            if (shop == null)
            {
                throw new ArgumentNullException(nameof(shop));
            }
            _context.Shop.Add(shop);
        }
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
