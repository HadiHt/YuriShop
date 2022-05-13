using AutoMapper;
using YuriShopV1.Dtos.Purchases;
using YuriShopV1.Models;

namespace YuriShopV1.Profiles
{
    public class PurchaseProfile : Profile
    {
        public PurchaseProfile()
        {
            CreateMap<Purchase, PurchaseReadDto>();
            CreateMap<PurchaseWriteDto, Purchase>();
            CreateMap<PurchaseUpdateDto, Purchase>();
        }
    }
}