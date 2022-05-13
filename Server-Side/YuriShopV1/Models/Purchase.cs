using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Models
{
    public class Purchase
    {

            [Key]
            public int PurchaseId { get; set; }

            [Required]
            [ForeignKey("OrderRefId")]
            public Order Order { get; set; }
            public int OrderRefId { get; set; }

            [Required]
            [ForeignKey("ProductRefId")]
            public Product Product { get; set; }
            public int ProductRefId { get; set; }

            [Required]
            public int Quantity { get; set; }
    }

}
