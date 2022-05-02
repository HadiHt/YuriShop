using YuriShopV1.Data.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Data
{
    public class MockDbContextcs : IAddressRepo
    {
        public void CreateAddress(Address address)
        {
            throw new System.NotImplementedException();
        }

        public Address GetAddressByShopId(int id)
        {
            throw new System.NotImplementedException();
        }

        public Address GetAddressByUserId(int id)
        {
            throw new System.NotImplementedException();
        }

        public bool SaveChanges()
        {
            throw new System.NotImplementedException();
        }

        public void UpdateAddress(Address address)
        {
            throw new System.NotImplementedException();
        }
    }
}
