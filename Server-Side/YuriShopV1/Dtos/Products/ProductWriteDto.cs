using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using YuriShopV1.Models;

namespace YuriShopV1.Dtos.Products
{
    public class ProductWriteDto
    {
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin
=======
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451

>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451
        [ForeignKey("ShopRefId")]
        public Shop Shop { get; set; }
        public int ShopRefId { get; set; }

    }
}
