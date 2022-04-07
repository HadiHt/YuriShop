namespace YuriShopV1.Models
{
    public class WishList
    {
        public User User { get; set; }
        public int UserRefId { get; set; }

        public Shop Shop { get; set; }
        public int ShopRefId { get; set; }

        public Product Product { get; set; }
        public int ProductRefId { get; set; }
    }
}
