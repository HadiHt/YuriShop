﻿using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Models
{
    public class Address
    {
        [Key]
        [Required]
        public int AddressId { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Area { get; set; }
        [Required]
        public string Building { get; set; }
        [Required]
        public string Details { get; set; }

        [ForeignKey("UserRefId")]
        public User User { get; set; }
#nullable enable
        public int? UserRefId { get; set; }
#nullable disable
        [ForeignKey("ShopRefId")]
        public Shop Shop { get; set; }
#nullable enable
        public int? ShopRefId { get; set; }
    }
}
