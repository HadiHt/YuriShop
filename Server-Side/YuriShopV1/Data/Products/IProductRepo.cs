using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface IProductRepo
    {
        
        IEnumerable<Product> GetAllProducts();
        Product GetProductById(int id);
        IEnumerable<Product> GetAllProductsByName(string ProductName);
        IEnumerable<Product> GetAllProductsByShopId(int id);
        IEnumerable<Product> GetAllProductsByCategory(string Category);
        void UpdateProduct(Product product);
        void CreateProduct(Product product);
        bool SaveChanges();
    }
}
