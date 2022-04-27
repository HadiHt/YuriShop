using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using YuriShopV1.Models;

namespace YuriShopV1.Dtos.Users
{
    public class UserWriteDto
    {

        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public bool isAdmin = false;

    }
}
