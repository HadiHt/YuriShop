using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Models
{
    public class Order
    {
        [Key]
        [Required]
        public int OrderId { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public DateTime TimeCreated { get; set; }

        [ForeignKey("UserRefId")]
        public User User { get; set; }
        public int UserRefId { get; set; }

        [ForeignKey("ProductRefId")]
        public Product Product { get; set; }
        public int ProductRefId { get; set; }
    }
}
