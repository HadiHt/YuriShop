namespace YuriShopV1.Models
{
    public class Address
    {
        public string Street { get; set; }
        public string City { get; set; }
        public string Area { get; set; }
        public string Building { get; set; }
        public string Details { get; set; }

        public User User { get; set; }
        public int UserRefId { get; set; }

        public Shop Shop { get; set; }
        public int ShopRefId { get; set; }
    }
}
