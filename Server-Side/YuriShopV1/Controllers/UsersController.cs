using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using YuriShopV1.Data.Applications;
using YuriShopV1.Data.Users;
using YuriShopV1.Dtos.Addresses;
using YuriShopV1.Dtos.Applications;
using YuriShopV1.Dtos.Cards;
using YuriShopV1.Dtos.Users;
using YuriShopV1.Dtos.WishLists;
using YuriShopV1.Models;

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

        public UsersController(IMapper mapper,IApplicationRepo applicationRepo,IAddressRepo addressRepo, ICardRepo cardRepo, IUserRepo userRepo, IWishListRepo wishlistRepo )
        {
            _mapper = mapper;
            _applicationRepo = applicationRepo;
            _addressRepo = addressRepo;
            _cardRepo = cardRepo;
            _userRepo = userRepo;
            _wishlistRepo = wishlistRepo;
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

        [HttpPost("SignUp")]
        public ActionResult<UserReadDto> CreateUser(UserWriteDto user)
        {
            //need to check validation of address 
            var UserModel = _mapper.Map<User>(user);
            _userRepo.CreateUser(UserModel);
            _userRepo.SaveChanges();

            var userReadDto = _mapper.Map<UserReadDto>(UserModel);
            return CreatedAtRoute(nameof(GetUserById), new { Id = userReadDto.UserId }, userReadDto);
            //return Ok(AddressModel);
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
    }
}
