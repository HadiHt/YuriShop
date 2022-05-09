using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface IUserRepo
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int id);
        User GetUserByEmail(string email);
        User GetUserByUsername(string username);
        void CreateUser(User user);
        void UpdateUser(User user);
        bool SaveChanges();
    }
}
