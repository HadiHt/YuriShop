using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using YuriShopV1.Data.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopsController : ControllerBase
    {
        private readonly IShopRepo _shopRepo;
        private readonly IAddressRepo _addressRepo;
        private readonly ICardRepo _cardRepo;
        private readonly IUserRepo _userRepo;


        public ShopsController(IShopRepo shopRepo ,IAddressRepo addressRepo, ICardRepo cardRepo, IUserRepo userRepo)
        {
            _shopRepo = shopRepo;
            _addressRepo = addressRepo;
            _cardRepo = cardRepo;
            _userRepo = userRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Shop>> GetAllShops()
        {
            return Ok(_shopRepo.GetAllShops());
        }
        [HttpGet("{id}")]
        public ActionResult<Shop> GetShopById(int id)
        {
            return Ok(_shopRepo.GetShopById(id));
        }

        [HttpGet("{id}/address")]
        public ActionResult<Address> GetAddressByShopId(int id)
        {
            var address = _addressRepo.GetAddressByShopId(id);
            return Ok(address);
        }

        [HttpGet("{id}/card")]
        public ActionResult<Card> GetCardByShopId(int id)
        {
            var card = _cardRepo.GetCardByShopId(id);
            return Ok(card);
        }
    }
}
