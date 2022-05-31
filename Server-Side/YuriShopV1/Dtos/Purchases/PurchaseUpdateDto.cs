using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Models
{
    public class PurchaseUpdateDto
    {
        public int Quantity { get; set; }
        public string ProductState { get; set; }
        public int OrderRefId { get; set; }
        public int ProductRefId { get; set; }
    }
}
