using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Models
{
    [Keyless]
    public class Card
    {
        [Required]
        public int CardNumber { get; set; }
        [Required]
        public string Brand { get; set; }
        [Required]
        public string ExpirationDate { get; set; }
        [Required]
        public int CVV { get; set; }
        [Required]
        public string Name { get; set; }

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
