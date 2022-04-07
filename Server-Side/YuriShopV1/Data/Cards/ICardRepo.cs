using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface ICardRepo
    {
        Card GetCardByUserId(int id);
        Card GetCardByShopId(int id);
    }
}
