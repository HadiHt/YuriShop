using YuriShopV1.Data.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Data
{
    public class MockDbContextcs : IAddressRepo
    {
        public Address GetAddressByShopId(int id)
        {
            throw new System.NotImplementedException();
        }

        public Address GetAddressByUserId(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}
