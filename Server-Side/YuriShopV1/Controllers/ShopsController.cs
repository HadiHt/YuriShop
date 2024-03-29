﻿using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using YuriShopV1.Data.Users;
using YuriShopV1.Dtos.Addresses;
using YuriShopV1.Dtos.Cards;
using YuriShopV1.Dtos.Shops;
using YuriShopV1.Models;
using YuriShopV1.Services;

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
        private readonly UserManager _userManager;
        private readonly AutoMailer _autoMailer;

        public ShopsController(IMapper mapper, IShopRepo shopRepo ,IAddressRepo addressRepo, ICardRepo cardRepo, IUserRepo userRepo, UserManager userManager, AutoMailer autoMailer)
        {
            _mapper = mapper;
            _shopRepo = shopRepo;
            _addressRepo = addressRepo;
            _cardRepo = cardRepo;
            _userRepo = userRepo;
            _userManager = userManager;
            _autoMailer = autoMailer;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ShopReadDto>> GetAllShops()
        {
            var Shops = _shopRepo.GetAllShops();
            return Ok(_mapper.Map<IEnumerable<ShopReadDto>>(Shops));
        }

        [HttpGet("email/{email}")]
        public ActionResult<ShopReadDto> GetShopByEmail(string email)
        {
            var Shop = _shopRepo.GetShopByEmail(email);
            return Ok(_mapper.Map<ShopReadDto>(Shop));
        }
        [HttpGet("{id}", Name = "GetShopById")]
        public ActionResult<ShopReadDto> GetShopById(int id)
        {
            var Shop = _shopRepo.GetShopById(id);
            if (Shop != null)
            {
                return Ok(_mapper.Map<ShopReadDto>(Shop));
            }
            return NotFound();
        }
        [HttpPost("create")]
        public ActionResult<ShopReadDto> CreateShop(ShopWriteDto shop)
        {
            if (_userRepo.GetUserByEmail(shop.Email) == null && _shopRepo.GetShopByEmail(shop.Email) == null)
            {
                var ShopModel = _mapper.Map<Shop>(shop);
                _shopRepo.CreateShop(ShopModel);
                _shopRepo.SaveChanges();
                string to = ShopModel.Email.ToString();
                string subject = "Yuri Shop Application Accepted!";
                string body = "After Our review for your " + ShopModel.Username.ToString() + " shop application. \n It has been decided to accept your Shop qualifications, you can now sign in as a shop with your shop Credentials. \n Email: " + ShopModel.Email.ToString() + ".\n Password: " + ShopModel.Password.ToString() + ". \n With Best Regards \n `Yuri Shop Admins";
                _autoMailer.SendMail(subject, to, body);

                var shopReadDto = _mapper.Map<ShopReadDto>(ShopModel);
                return CreatedAtRoute(nameof(GetShopById), new { Id = shopReadDto.ShopId }, shopReadDto);
            }
            return Conflict(new { message = "This Email is already taken!" });
        }

        [HttpGet("{id}/address", Name = "GetAddressByShopId")]
        public ActionResult<AddressReadDto> GetAddressByShopId(int id)
        {
            var address = _addressRepo.GetAddressByShopId(id);
            if (address != null)
            {
                return Ok(_mapper.Map<AddressReadDto>(address));
            }
            return NotFound();
        }
        [HttpPost("{id}/address")]
        public ActionResult<AddressReadDto> CreateShopAddress(AddressWriteDto address)
        {
            //need to check validation of address 
            var AddressModel = _mapper.Map<Address>(address);
            _addressRepo.CreateAddress(AddressModel);
            _addressRepo.SaveChanges();

            var addressReadDto = _mapper.Map<AddressReadDto>(AddressModel);
            return CreatedAtRoute(nameof(GetAddressByShopId), new { Id = addressReadDto.AddressId }, addressReadDto);
            //return Ok(AddressModel);
        }
        [HttpGet("Username/{Username}")]
        public ActionResult<ShopReadDto> GetShopByUsername(string username)
        {
            var Shop = _shopRepo.GetShopByUsername(username);
            if (Shop != null)
            {
                return Ok(_mapper.Map<ShopReadDto>(Shop));
            }
            return NotFound();
        }

        //[HttpGet("{id}/card")]
        //public ActionResult<CardReadDto> GetCardByShopId(int id)
        //{
        //    var card = _cardRepo.GetCardByShopId(id);
        //    if (card != null)
        //    {
        //        return Ok(_mapper.Map<CardReadDto>(card));
        //    }
        //    return NotFound();
        //}
        [HttpPut("{id}/shop")]
        public ActionResult UpdateShop(int id, ShopUpdateDto shop)
        {
            if (shop == null)
            {
                return NoContent();
            }
            var Shop = _userManager.CheckShopUsername(shop);
            if (Shop != null)
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
            else { return Conflict(new { message = "This Username is already taken!" }); }

        }

        [HttpPut("{id}/address")]
        public ActionResult UpdateAddress(int id, AddressUpdateDto address)
        {
            var AddressModelFromRepo = _addressRepo.GetAddressByShopId(id);
            if (AddressModelFromRepo == null)
            {
                return NotFound();
            }
            _mapper.Map(address, AddressModelFromRepo);
            _addressRepo.UpdateAddress(AddressModelFromRepo);
            _addressRepo.SaveChanges();

            return NoContent();
        }

    }
}
