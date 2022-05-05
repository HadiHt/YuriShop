using AutoMapper;
using YuriShopV1.Dtos.Shops;
using YuriShopV1.Models;

namespace YuriShopV1.Profiles
{
    public class ShopProfile : Profile
    {
        public ShopProfile()
        {
            CreateMap<Shop, ShopReadDto>();
            CreateMap<ShopWriteDto,Shop>();
            CreateMap<ShopUpdateDto, Shop>();
        }
    }
}