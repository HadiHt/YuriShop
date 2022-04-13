using System;

namespace YuriShopV1.Dtos.Products
{
    public class ProductReadDto
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Color { get; set; }
        public string Size { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public int SoldQuantity { get; set; }
        public DateTime TimeCreated { get; set; }
        public int ShopRefId { get; set; }
    }
}
