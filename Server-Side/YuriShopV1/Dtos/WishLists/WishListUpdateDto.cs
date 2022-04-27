using System.ComponentModel.DataAnnotations.Schema;
using YuriShopV1.Models;

namespace YuriShopV1.Dtos.WishLists
{
    public class WishListUpdateDto
    {
        [ForeignKey("UserRefId")]
        public User User { get; set; }
        public int UserRefId { get; set; }

        [ForeignKey("ProductRefId")]
        public Product Product { get; set; }
        public int ProductRefId { get; set; }
    }
}
