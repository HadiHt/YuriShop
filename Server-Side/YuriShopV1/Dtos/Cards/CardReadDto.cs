namespace YuriShopV1.Dtos.Cards
{
    public class CardReadDto
    {
        public int CardNumber { get; set; }
        public string Brand { get; set; }
        public string ExpirationDate { get; set; }
        public int CVV { get; set; }
        public string Name { get; set; }
        public int? UserRefId { get; set; }
        public int? ShopRefId { get; set; }
    }
}
