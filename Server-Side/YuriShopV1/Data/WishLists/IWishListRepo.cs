using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface IWishListRepo
    {
        WishList GetWishListByUserIdAndProductId(int productId,int userId);
        IEnumerable<WishList> GetAllWishListsByUserId(int id);
        void CreateWishList(WishList wishList);
        void UpdateWishList(WishList wishList);
        bool SaveChanges();
    }
}
