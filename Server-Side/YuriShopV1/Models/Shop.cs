using System.ComponentModel.DataAnnotations;

namespace YuriShopV1.Models
{
    public class Shop
    {
        [Key]
        [Required]
        public int ShopId { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

    }
}
