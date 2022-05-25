using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using YuriShopV1.Models;

namespace YuriShopV1.Dtos.Applications
{
    public class ApplicationUpdateDto
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Username { get; set; }
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
        [Required]
        public string ShopType { get; set; }
        [Required]
        public string ProductsToSell { get; set; }
        [Required]
        public int ValidationNumber { get; set; }
        [Required]
        public int PhoneNumber { get; set; }

        [ForeignKey("UserRefId")]
        public User User { get; set; }
        public int UserRefId { get; set; }
    }
}
