﻿using System.Collections.Generic;
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
    }
}
