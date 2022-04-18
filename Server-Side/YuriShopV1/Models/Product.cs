using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Models
{
    public class Product
    {
        [Key]
        [Required]
        public int ProductId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Category { get; set; }
        public string Color { get; set; }
        public string Size { get; set; }
        [Required]
        public double Price { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public int SoldQuantity { get; set; }
        [Required]
        public string image { get; set; }
        [Required]
        public DateTime TimeCreated { get; set; }

        [ForeignKey("ShopRefId")]
        public Shop Shop { get; set; }
        public int ShopRefId { get; set; }

    }
}
