using Microsoft.AspNetCore.Mvc;
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
        private readonly IOrderRepo _orderRepo;
        private readonly IUserRepo _userRepo;
        private readonly IWishListRepo _wishlistRepo;

        public UsersController(IAddressRepo addressRepo, ICardRepo cardRepo, IOrderRepo orderRepo, IUserRepo userRepo, IWishListRepo wishlistRepo )
        {
            _addressRepo = addressRepo;
            _cardRepo = cardRepo;
            _orderRepo = orderRepo;
            _userRepo = userRepo;
            _wishlistRepo = wishlistRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetAllUsers()
        {

        }
        [HttpGet("{id}")]
        public ActionResult<User> GetUserById(int id)
        {

        }
    }
}
