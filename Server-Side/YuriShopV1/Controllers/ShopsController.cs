using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using YuriShopV1.Data.Users;
using YuriShopV1.Dtos.Addresses;
using YuriShopV1.Dtos.Cards;
using YuriShopV1.Dtos.Shops;
using YuriShopV1.Models;

namespace YuriShopV1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopsController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IShopRepo _shopRepo;
        private readonly IAddressRepo _addressRepo;
        private readonly ICardRepo _cardRepo;
        private readonly IUserRepo _userRepo;


        public ShopsController(IMapper mapper, IShopRepo shopRepo ,IAddressRepo addressRepo, ICardRepo cardRepo, IUserRepo userRepo)
        {
            _mapper = mapper;
            _shopRepo = shopRepo;
            _addressRepo = addressRepo;
            _cardRepo = cardRepo;
            _userRepo = userRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ShopReadDto>> GetAllShops()
        {
            var Shops = _shopRepo.GetAllShops();
            return Ok(_mapper.Map<IEnumerable<ShopReadDto>>(Shops));
        }
        [HttpGet("{id}")]
        public ActionResult<ShopReadDto> GetShopById(int id)
        {
            var Shop = _shopRepo.GetShopById(id);
            if (Shop != null)
            {
                return Ok(_mapper.Map<ShopReadDto>(Shop));
            }
            return NotFound();
        }

        [HttpGet("{id}/address")]
        public ActionResult<AddressReadDto> GetAddressByShopId(int id)
        {
            var address = _addressRepo.GetAddressByShopId(id);
            if (address != null)
            {
                return Ok(_mapper.Map<AddressReadDto>(address));
            }
            return NotFound();
        }

        [HttpGet("{id}/card")]
        public ActionResult<CardReadDto> GetCardByShopId(int id)
        {
            var card = _cardRepo.GetCardByShopId(id);
            if (card != null)
            {
                return Ok(_mapper.Map<CardReadDto>(card));
            }
            return NotFound();
        }
        [HttpPut("{id}/shop")]
        public ActionResult UpdateUser(int id, ShopUpdateDto shop)
        {
            var ShopModelFromRepo = _shopRepo.GetShopById(id);
            if (ShopModelFromRepo == null)
            {
                return NotFound();
            }
            _mapper.Map(shop, ShopModelFromRepo);
            _shopRepo.UpdateShop(ShopModelFromRepo);
            _shopRepo.SaveChanges();

            return NoContent();
        }
    }
}
