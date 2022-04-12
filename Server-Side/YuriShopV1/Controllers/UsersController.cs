using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using YuriShopV1.Data.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IAddressRepo _addressRepo;
        private readonly ICardRepo _cardRepo;
        private readonly IUserRepo _userRepo;
        private readonly IWishListRepo _wishlistRepo;

        public UsersController(IAddressRepo addressRepo, ICardRepo cardRepo, IUserRepo userRepo, IWishListRepo wishlistRepo )
        {
            _addressRepo = addressRepo;
            _cardRepo = cardRepo;
            _userRepo = userRepo;
            _wishlistRepo = wishlistRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetAllUsers()
        {
            Console.WriteLine("test");
            return Ok(_userRepo.GetAllUsers());
        }
        [HttpGet("{id}")]
        public ActionResult<User> GetUserById(int id)
        {
            return Ok(_userRepo.GetUserById(id));
        }

        [HttpGet("{id}/address")]
        public ActionResult<Address> GetAddressByUserId(int id)
        {
            var address = _addressRepo.GetAddressByUserId(id);
            return Ok(address);
        }

        [HttpGet("{id}/card")]
        public ActionResult<Card> GetCardByUserId(int id)
        {
            var card = _cardRepo.GetCardByUserId(id);
            return Ok(card);
        }

        [HttpGet("{id}/wishlist")]
        public ActionResult<WishList> GetWishListByUserId(int id)
        {
            var wishlist = _wishlistRepo.GetAllWishListsByUserId(id);
            return Ok(wishlist);
        }
    }
}
