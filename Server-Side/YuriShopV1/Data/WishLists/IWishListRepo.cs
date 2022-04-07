using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface IWishListRepo
    {
        IEnumerable<User> GetAllWishListsByUserId(int id);
    }
}
