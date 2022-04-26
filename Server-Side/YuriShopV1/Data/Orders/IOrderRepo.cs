using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface IOrderRepo
    {
        IEnumerable<Order> GetAllOrders();
        IEnumerable<Order> GetAllOrdersByUserId(int id);
        IEnumerable<Order> GetAllOrdersByProductId(int id);

        Order GetOrderById(int id);
        void CreateOrder(Order order);
        bool SaveChanges();
    }
}
