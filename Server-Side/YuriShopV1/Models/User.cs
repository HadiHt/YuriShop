using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Models
{
    public class User
    {
        [Key]
        [Required]
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public int? PhoneNumber { get; set; }
        [Required]
        public bool isAdmin { get; set; }

    }
}
