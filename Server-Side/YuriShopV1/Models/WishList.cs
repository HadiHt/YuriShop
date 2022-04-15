using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Models
{
    public class WishList
    {
        [Key]
        [Required]
        public int WishListId { get; set; }
        [ForeignKey("UserRefId")]
        public User User { get; set; }
        public int UserRefId { get; set; }

        [ForeignKey("ProductRefId")]
        public Product Product { get; set; }
        public int ProductRefId { get; set; }
    }
}
