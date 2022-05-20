using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Models
{
    public class PurchaseWriteDto
    {
        [Required]
        public int Quantity { get; set; }
        [Required]
        public string ProductState { get; set; }

        [ForeignKey("OrderRefId")]
        public Order Order { get; set; }
        public int OrderRefId { get; set; }

        [ForeignKey("ProductRefId")]
        public Product Product { get; set; }
        public int ProductRefId { get; set; }
    }
}
