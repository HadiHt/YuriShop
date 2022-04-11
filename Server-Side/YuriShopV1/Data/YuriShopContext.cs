using Microsoft.EntityFrameworkCore;
using YuriShopV1.Models;

namespace YuriShopV1.Data
{
    public class YuriShopContext : DbContext
    {
        public YuriShopContext(DbContextOptions<YuriShopContext> opt) : base(opt)
        {

        }

        public DbSet<Address> Address { get; set; }
        public DbSet<Card> Card { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Shop> Shop { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<WishList> WishList { get; set; }
        public DbSet<Application> Application { get; set; }
    }
}
