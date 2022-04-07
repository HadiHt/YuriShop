namespace YuriShopV1.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public string State { get; set; }
        public int Quantity { get; set; }

        public User User { get; set; }
        public int UserRefId { get; set; }

        public Shop Shop { get; set; }
        public int ShopRefId { get; set; }

        public Product Product { get; set; }
        public int ProductRefId { get; set; }
    }
}
