using YuriShopV1.Data.Users;
using YuriShopV1.Models;
using System.Linq;

namespace YuriShopV1.Data.Addresses
{
    public class SqlAddressRepo : IAddressRepo
    {
        private readonly YuriShopContext _context;

        public SqlAddressRepo(YuriShopContext context)
        {
            _context = context;
        }
        public Address GetAddressByShopId(int id)
        {
            return _context.Address.FirstOrDefault(p => p.ShopRefId == id);
        }

        public Address GetAddressByUserId(int id)
        {
            return _context.Address.FirstOrDefault(p => p.UserRefId == id);
        }
    }
}
