using System;
using System.Collections.Generic;
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
        public User GetUserByEmail(string email)
        {
            return _context.User.FirstOrDefault(p => p.Email == email);
        }

        public void CreateUser(User user)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            _context.User.Add(user);
        }
        public void UpdateUser(User user)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            _context.User.Update(user);
        }
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public User GetUserByUsername(string username)
        {
            return _context.User.FirstOrDefault(p => p.Username == username);
        }
    }
}
