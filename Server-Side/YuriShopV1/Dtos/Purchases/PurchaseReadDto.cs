using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Models
{
    public class PurchaseReadDto
    {
        public int PurchaseId { get; set; }
        public int Quantity { get; set; }
        public string ProductState { get; set; }
        public int OrderRefId { get; set; }
        public int ProductRefId { get; set; }
    }
}
