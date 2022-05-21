using System.Collections.Generic;
using YuriShopV1.Dtos.Orders;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Users
{
    public interface IOrderRepo
    {
        IEnumerable<Order> GetAllOrders();
        IEnumerable<OrderReadDto> GetAllOrdersByUserId(int id);
        OrderReadDto GetOrderById(int id);
        void CreateOrder(Order order);
        void UpdateOrder(Order order);
        void DeleteOrder(Order order);
        bool SaveChanges();
    }
}
