using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Models
{
    [Keyless]
    public class Address
    {
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
        public int UserRefId { get; set; }

        [ForeignKey("ShopRefId")]
        public Shop Shop { get; set; }
        public int ShopRefId { get; set; }
    }
}
