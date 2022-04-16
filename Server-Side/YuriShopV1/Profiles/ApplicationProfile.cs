using AutoMapper;
using YuriShopV1.Dtos.Applications;
using YuriShopV1.Models;

namespace YuriShopV1.Profiles
{
    public class ApplicationProfile : Profile
    {
        public ApplicationProfile()
        {
            CreateMap<Application, ApplicationReadDto>();
            CreateMap<ApplicationWriteDto, Application>();
        }
    }
}