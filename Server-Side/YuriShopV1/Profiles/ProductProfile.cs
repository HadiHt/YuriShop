using AutoMapper;
using YuriShopV1.Dtos.Products;
using YuriShopV1.Models;

namespace YuriShopV1.Profiles
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductReadDto>();
            CreateMap<ProductWriteDto, Product>();
            CreateMap<ProductUpdateDto, Product>();
        }
    }
}