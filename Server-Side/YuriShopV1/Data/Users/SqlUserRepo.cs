﻿using System.Collections.Generic;
using System.Linq;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public class SqlUserRepo : IUserRepo
    {
        private readonly YuriShopContext _context;

        public SqlUserRepo(YuriShopContext context)
        {
            _context = context;
        }
        public IEnumerable<User> GetAllUsers()
        {
            return _context.User.ToList();
        }

        public User GetUserById(int id)
        {
            return _context.User.FirstOrDefault(p => p.UserId == id);
        }
    }
}
