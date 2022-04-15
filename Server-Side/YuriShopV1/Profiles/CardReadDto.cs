using AutoMapper;
using YuriShopV1.Dtos.Cards;
using YuriShopV1.Models;

namespace YuriShopV1.Profiles
{
    public class CardProfile : Profile
    {
        public CardProfile()
        {
            CreateMap<Card, CardReadDto>();
        }
    }
}