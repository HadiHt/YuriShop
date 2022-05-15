using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using YuriShopV1.Models;

namespace YuriShopV1.Dtos.Orders
{
    public class OrderUpdateDto
    {
        [Required]
        public string OrderState { get; set; }

        [ForeignKey("UserRefId")]
        public User User { get; set; }
        public int UserRefId { get; set; }

    }
}