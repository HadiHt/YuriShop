using System;
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
        public IEnumerable<Product> GetAllProductsByCategory(string Category)
        {

            return _context.Product.Where(p => p.Category == Category).ToList();
            
        }

        public void CreateProduct(Product product)
        {
            if (product == null)
            {
                throw new ArgumentNullException(nameof(product));
            }
            _context.Product.Add(product);
        }
        public void UpdateProduct(Product product)
        {
            if (product == null)
            {
                throw new ArgumentNullException(nameof(product));
            }
            _context.Product.Update(product);
        }
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public IEnumerable<Product> GetAllProductsByName(string ProductName)
        {
            return _context.Product.Where(p => p.Name.Contains(ProductName)).ToList();
        }

        public void DeleteProduct(Product product)
        {
            if (product == null)
            {
                throw new ArgumentNullException(nameof(product));
            }
            _context.Product.Remove(product);
        }
    }
}
