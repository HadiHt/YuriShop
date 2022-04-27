using System.ComponentModel.DataAnnotations;

namespace YuriShopV1.Dtos.Shops
{
    public class ShopUpdateDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

    }
}
