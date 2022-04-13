using AutoMapper;
using YuriShopV1.Dtos.Addresses;
using YuriShopV1.Models;

namespace YuriShopV1.Profiles
{
    public class AddressProfile : Profile
    {
        public AddressProfile()
        {
            CreateMap<Address, AddressReadDto>();
            CreateMap<AddressWriteDto, Address>();
        }
    }
}
