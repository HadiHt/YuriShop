using AutoMapper;
using YuriShopV1.Dtos.Orders;
using YuriShopV1.Models;

namespace YuriShopV1.Profiles
{
    public class OrderProfile : Profile
    {
        public OrderProfile()
        {
            CreateMap<Order, OrderReadDto>();
            CreateMap<OrderWriteDto, Order>();
            CreateMap<OrderUpdateDto, Order>();
        }
    }
}