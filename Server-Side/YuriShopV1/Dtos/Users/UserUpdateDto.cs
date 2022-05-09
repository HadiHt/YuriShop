using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using YuriShopV1.Models;

namespace YuriShopV1.Dtos.Users
{
    public class UserUpdateDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public int PhoneNumber { get; set; }
        public bool isAdmin = false;
    }
}