
namespace YuriShopV1.Dtos.Addresses
{
    public class AddressReadDto
    {
        public int AddressId { get; set; }
        public string State { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Area { get; set; }
        public string Building { get; set; }
        public string Details { get; set; }
        public int? UserRefId { get; set; }
        public int? ShopRefId { get; set; }
    }
}
