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
        public string OrderState { get; set; }

        [Required]
        public DateTime TimeCreated { get; set; } = DateTime.Now;

        [ForeignKey("UserRefId")]
        public User User { get; set; }
        public int UserRefId { get; set; }
        public List<Purchase> Purchases { get; set; }

    }
}
