namespace YuriShopV1.Models
{
    public class Card
    {
        public int CardNumber { get; set; }
        public string Brand { get; set; }
        public string ExpirationDate { get; set; }
        public int CVV { get; set; }
        public string Name { get; set; }

        public User User { get; set; }
        public int UserRefId { get; set; }

        public Shop Shop { get; set; }
        public int ShopRefId { get; set; }


    }
}
