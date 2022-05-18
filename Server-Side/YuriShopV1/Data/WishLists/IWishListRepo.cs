using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface IWishListRepo
    {
        IEnumerable<WishList> GetAllWishListsByUserId(int id);
        WishList GetWishListByWishListId(int id);
        void CreateWishList(WishList wishList);
        void UpdateWishList(WishList wishList);
        void DeleteWishList(WishList wishList);
        bool SaveChanges();
    }
}
