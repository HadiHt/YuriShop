namespace YuriShopV1.Dtos.Applications
{
    public class ApplicationReadDto
    {
        public int ApplicationId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public string State { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Area { get; set; }
        public string Building { get; set; }
        public string Details { get; set; }
        public string ShopType { get; set; }
        public string ProductsToSell { get; set; }
        public int ValidationNumber { get; set; }
        public int PhoneNumber { get; set; }
        public int UserRefId { get; set; }
    }
}
