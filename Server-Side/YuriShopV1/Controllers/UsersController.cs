using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using YuriShopV1.Data.Applications;
using YuriShopV1.Data.Users;
using YuriShopV1.Dtos.Addresses;
using YuriShopV1.Dtos.Applications;
using YuriShopV1.Dtos.Cards;
using YuriShopV1.Dtos.Shops;
using YuriShopV1.Dtos.Users;
using YuriShopV1.Dtos.WishLists;
using YuriShopV1.Models;
using YuriShopV1.Services;

namespace YuriShopV1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IApplicationRepo _applicationRepo;
        private readonly IAddressRepo _addressRepo;
        private readonly ICardRepo _cardRepo;
        private readonly IUserRepo _userRepo;
        private readonly IWishListRepo _wishlistRepo;
        private readonly IShopRepo _shopRepo;
        private readonly UserManager _userManager;

        public UsersController(IMapper mapper,IApplicationRepo applicationRepo,IAddressRepo addressRepo, ICardRepo cardRepo, IUserRepo userRepo, IWishListRepo wishlistRepo , IShopRepo shopRepo, UserManager userManager)
        {
            _mapper = mapper;
            _applicationRepo = applicationRepo;
            _addressRepo = addressRepo;
            _cardRepo = cardRepo;
            _userRepo = userRepo;
            _wishlistRepo = wishlistRepo;
            _shopRepo = shopRepo;
            _userManager = userManager;
        }

        [HttpGet]
        public ActionResult<IEnumerable<UserReadDto>> GetAllUsers()
        {
            var Users = _userRepo.GetAllUsers();
            return Ok(_mapper.Map<IEnumerable<UserReadDto>>(Users));
        }
        [HttpGet("{id}", Name = "GetUserById")]
        public ActionResult<UserReadDto> GetUserById(int id)
        {
            var User = _userRepo.GetUserById(id);
            if(User != null)
            {
                return Ok(_mapper.Map<UserReadDto>(User));
            }
            return NotFound();
        }
        [HttpPost("login")]
        public async Task<IActionResult> ValidateUser(UserWriteDto checkUser)
        {
            
            var (User, Shop)= _userManager.CheckEmailAndPassword(checkUser);

            if (User != null)
            {
                return Ok(User);
            }
            if (Shop != null)
            {
                return Ok(Shop);
            }
            return NotFound();
        }

        [HttpPost("SignUp")]
        public ActionResult<UserReadDto> CreateUser(UserWriteDto user) 
        {
            if(_userRepo.GetUserByEmail(user.Email) == null && _shopRepo.GetShopByEmail(user.Email) == null)
            {
                var UserModel = _mapper.Map<User>(user);
                _userRepo.CreateUser(UserModel);
                _userRepo.SaveChanges();

                var userReadDto = _mapper.Map<UserReadDto>(UserModel);
                return CreatedAtRoute(nameof(GetUserById), new { Id = userReadDto.UserId }, userReadDto);
            }
            return Conflict(new { message = "This Email is already taken!" });
        }

        [HttpGet("{id}/address", Name="GetAddressByUserId")]
        public ActionResult<AddressReadDto> GetAddressByUserId(int id)
        {
            var address = _addressRepo.GetAddressByUserId(id);
            if (address != null)
            {
                return Ok(_mapper.Map<AddressReadDto>(address));
            }
            return NotFound();
        }

        [HttpPost("{id}/address")]
        public ActionResult<AddressReadDto> CreateUserAddress(AddressWriteDto address)
        {
            //need to check validation of address 
            var AddressModel = _mapper.Map<Address>(address);
            _addressRepo.CreateAddress(AddressModel);
            _addressRepo.SaveChanges();

            var addressReadDto = _mapper.Map<AddressReadDto>(AddressModel);
            return CreatedAtRoute(nameof(GetAddressByUserId), new { Id = addressReadDto.AddressId }, addressReadDto);
            //return Ok(AddressModel);
        }

        [HttpGet("{id}/card", Name="GetCardByUserId")]
        public ActionResult<CardReadDto> GetCardByUserId(int id)
        {
            var card = _cardRepo.GetCardByUserId(id);
            if (card != null)
            {
                return Ok(_mapper.Map<CardReadDto>(card));
            }
            return NotFound();
        }

        [HttpPost("{id}/Card")]
        public ActionResult<CardReadDto> CreateCard(CardWriteDto card)
        {
            //need to check validation of address 
            var CardModel = _mapper.Map<Card>(card);
            _cardRepo.CreateCard(CardModel);
            _cardRepo.SaveChanges();

            var cardReadDto = _mapper.Map<CardReadDto>(CardModel);
            return CreatedAtRoute(nameof(GetCardByUserId), new { Id = cardReadDto.CardId }, cardReadDto);
            //return Ok(AddressModel);
        }

        [HttpGet("{id}/wishlist", Name = "GetWishListByUserId")]
        public ActionResult<IEnumerable<WishListReadDto>> GetWishListByUserId(int id)
        {
            var wishlist = _wishlistRepo.GetAllWishListsByUserId(id);
            if (wishlist != null)
            {
                return Ok(_mapper.Map<IEnumerable<WishListReadDto>>(wishlist));
            }
            return NotFound();
        }

        [HttpPost("{id}/wishlist")]
        public ActionResult<WishListReadDto> CreateWishList(WishListWriteDto wishlist)
        {
            //need to check validation of address 
            var WishListModel = _mapper.Map<WishList>(wishlist);
            _wishlistRepo.CreateWishList(WishListModel);
            _wishlistRepo.SaveChanges();

            var wishlistReadDto = _mapper.Map<WishListReadDto>(WishListModel);
            return CreatedAtRoute(nameof(GetWishListByUserId), new { Id = wishlistReadDto.WishListId }, wishlistReadDto);
            //return Ok(AddressModel);
        }

        [HttpGet("Applications")]
        public ActionResult<IEnumerable<ApplicationReadDto>> GetAllApplications()
        {
            var applications = _applicationRepo.GetAllApplications();
            if (applications != null)
            {
                return Ok(_mapper.Map<IEnumerable<ApplicationReadDto>>(applications));
            }
            return NotFound();
        }

        [HttpGet("{id}/application", Name = "GetApplicationById")]
        public ActionResult<UserReadDto> GetApplicationById(int id)
        {
            var Application = _applicationRepo.GetApplicationById(id);
            if (Application != null)
            {
                return Ok(_mapper.Map<ApplicationReadDto>(Application));
            }
            return NotFound();
        }

        [HttpPost("Application")]
        public ActionResult<ApplicationReadDto> CreateApplication(ApplicationWriteDto application)
        {
            //need to check validation of address 
            var ApplicationModel = _mapper.Map<Application>(application);
            _applicationRepo.CreateApplication(ApplicationModel);
            _applicationRepo.SaveChanges();

            var applicationReadDto = _mapper.Map<ApplicationReadDto>(ApplicationModel);
            return CreatedAtRoute(nameof(GetApplicationById), new { Id = applicationReadDto.ApplicationId }, applicationReadDto);
            //return Ok(AddressModel);
        }
        [HttpDelete("{id}/application")]
        public ActionResult DeleteApplication(int id)
        {
            var ApplicationModelFromRepo = _applicationRepo.GetApplicationById(id);
            if (ApplicationModelFromRepo == null)
            {
                return NotFound();
            }
            _applicationRepo.DeleteApplication(ApplicationModelFromRepo);
            _applicationRepo.SaveChanges();

            return NoContent();
        }

        [HttpPut("{id}/address")]
        public ActionResult UpdateAddress(int id, AddressUpdateDto address)
        {
            var AddressModelFromRepo = _addressRepo.GetAddressByUserId(id);
            if (AddressModelFromRepo == null)
            {
                return NotFound();
            }
            _mapper.Map(address, AddressModelFromRepo);
            _addressRepo.UpdateAddress(AddressModelFromRepo);
            _addressRepo.SaveChanges();

            return NoContent();
        }
        [HttpPut("{id}/card")]
        public ActionResult UpdateCard(int id, CardUpddateDto card)
        {
            var CardModelFromRepo = _cardRepo.GetCardByUserId(id);
            if (CardModelFromRepo == null)
            {
                return NotFound();
            }
            _mapper.Map(card, CardModelFromRepo);
            _cardRepo.UpdateCard(CardModelFromRepo);
            _cardRepo.SaveChanges();

            return NoContent();
        }
        [HttpPut("{id}/wishList")]
        public ActionResult UpdateWishList(int id, WishListUpdateDto wishList)
        {
            var WishListModelFromRepo = _wishlistRepo.GetWishListByWishListId(id);
            if (WishListModelFromRepo == null)
            {
                return NotFound();
            }
            _mapper.Map(wishList, WishListModelFromRepo);
            _wishlistRepo.UpdateWishList(WishListModelFromRepo);
            _wishlistRepo.SaveChanges();

            return NoContent();
        }
        [HttpGet("Username/{Username}")]
        public ActionResult<UserReadDto> GetUserByUsername(string username)
        {
            var User = _userRepo.GetUserByUsername(username);
            if (User != null)
            {
                return Ok(_mapper.Map<UserReadDto>(User));
            }
            return NotFound();
        }
        [HttpPut("{id}/user")]
        public ActionResult UpdateUser(int id, UserUpdateDto user)
        {
            if (user == null)
            {
                return NotFound();
            }
            var User = _userManager.CheckUserUsername(user);
            if (User != null)
            {
                var UserModelFromRepo = _userRepo.GetUserById(id);
                if (UserModelFromRepo == null)
                {
                    return NotFound();
                }
                _mapper.Map(user, UserModelFromRepo);
                _userRepo.UpdateUser(UserModelFromRepo);
                _userRepo.SaveChanges();
                return NoContent();
            }
            else { return Conflict(new { message = "This Username is already taken!" }); }
            
        }
    }
}
