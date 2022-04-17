namespace YuriShopV1.Dtos.Orders
{
    public class OrderReadDto
    {
        public int OrderId { get; set; }
        public string State { get; set; }
        public int Quantity { get; set; }
        public int UserRefId { get; set; }
        public int ProductRefId { get; set; }
    }
}
