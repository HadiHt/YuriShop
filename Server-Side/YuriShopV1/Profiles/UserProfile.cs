using AutoMapper;
using YuriShopV1.Dtos.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserReadDto>();
            CreateMap<UserWriteDto, User>();
        }
    }
}