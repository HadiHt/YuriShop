using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface IAddressRepo
    {
        Address GetAddressByUserId(int id);
        Address GetAddressByShopId(int id);
        void CreateAddress(Address address);
        bool SaveChanges();
    }
}
