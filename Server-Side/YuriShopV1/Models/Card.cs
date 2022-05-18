using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Models
{
    public class Card
    {
        [Key]
        [Required]
        public int CardId { get; set; }
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


    }
}
