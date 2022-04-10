using System.Collections.Generic;
using System.Linq;
using YuriShopV1.Data.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Products
{
    public class SqlProductRepo : IProductRepo
    {
        private readonly YuriShopContext _context;

        public SqlProductRepo(YuriShopContext context)
        {
            _context = context;
        }
        public IEnumerable<Product> GetAllProducts()
        {
            return _context.Product.ToList();
        }

        public Product GetProductById(int id)
        {
            return _context.Product.FirstOrDefault(p => p.ProductId == id);
        }

        public IEnumerable<Product> GetAllProductsByShopId(int id)
        {
            return _context.Product.Where(p => p.ShopRefId == id).ToList();
        }
    }
}
