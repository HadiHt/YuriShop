using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface IProductRepo
    {
        
        IEnumerable<Product> GetAllProducts();
        Product GetProductById(int id);
        IEnumerable<Product> GetAllProductsByShopId(int id);
        IEnumerable<Product> GetAllProductsByCategory(string Category);
        void CreateProduct(Product product);
        bool SaveChanges();
    }
}
