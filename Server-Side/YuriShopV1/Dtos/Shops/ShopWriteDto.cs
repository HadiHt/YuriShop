using System.ComponentModel.DataAnnotations;

namespace YuriShopV1.Dtos.Shops
{
    public class ShopWriteDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

    }
}
