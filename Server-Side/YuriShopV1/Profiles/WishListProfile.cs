using AutoMapper;
using YuriShopV1.Dtos.WishLists;
using YuriShopV1.Models;

namespace YuriShopV1.Profiles
{
    public class WishListProfile : Profile
    {
        public WishListProfile()
        {
            CreateMap<WishList, WishListReadDto>();
            CreateMap<WishListWriteDto, WishList>();
            CreateMap<WishListUpdateDto, WishList>();
        }
    }
}