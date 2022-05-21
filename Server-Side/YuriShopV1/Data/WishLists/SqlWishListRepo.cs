using System;
using System.Collections.Generic;
using System.Linq;
using YuriShopV1.Data.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Data.WishLists
{
    public class SqlWishListRepo : IWishListRepo
    {
        private readonly YuriShopContext _context;

        public SqlWishListRepo(YuriShopContext context)
        {
            _context = context;
        }
        public IEnumerable<WishList> GetAllWishListsByUserId(int id)
        {
            return _context.WishList.Where(p => p.UserRefId == id).ToList();
        }
        public WishList GetWishListByWishListId(int id)
        {
            return _context.WishList.FirstOrDefault(p => p.WishListId == id);
        }

        public void CreateWishList(WishList wishList)
        {
            if (wishList == null)
            {
                throw new ArgumentNullException(nameof(wishList));
            }
            _context.WishList.Add(wishList);
        }
        public void UpdateWishList(WishList wishList)
        {
            if (wishList == null)
            {
                throw new ArgumentNullException(nameof(wishList));
            }
            _context.WishList.Update(wishList);
        }
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void DeleteWishList(WishList wishList)
        {
            if (wishList == null)
            {
                throw new ArgumentNullException(nameof(wishList));
            }
            _context.WishList.Remove(wishList);
        }
    }
}
