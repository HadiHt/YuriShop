using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using YuriShopV1.Models;

namespace YuriShopV1.Dtos.Purchases
{
    public class PurchaseWriteDto
    {

        [ForeignKey("OrderRefId")]
        public Order Order { get; set; }
        [Required]
        public int OrderRefId { get; set; }

        [ForeignKey("ProductRefId")]
        public Product Product { get; set; }
        [Required]
        public int ProductRefId { get; set; }

        [Required]
        public int Quantity { get; set; }
    }

}
