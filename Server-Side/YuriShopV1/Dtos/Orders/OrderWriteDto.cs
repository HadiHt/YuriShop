using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using YuriShopV1.Models;

namespace YuriShopV1.Dtos.Orders
{
    public class OrderWriteDto
    {
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