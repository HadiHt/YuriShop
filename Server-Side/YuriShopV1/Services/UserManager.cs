using AutoMapper;
using System;
using System.Threading.Tasks;
using YuriShopV1.Data.Users;
using YuriShopV1.Dtos.Shops;
using YuriShopV1.Dtos.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Services
{
    public class UserManager
    {
        private readonly IUserRepo _userRepo;
        private readonly IShopRepo _shopRepo;
        private readonly IMapper _mapper;

        public UserManager(IUserRepo userRepo, IShopRepo shopRepo, IMapper mapper)
        {
            _userRepo = userRepo;
            _shopRepo = shopRepo;
            _mapper = mapper;
        }
        public (User, Shop) CheckEmailAndPassword(UserWriteDto loginUser)
        {
            var CheckUserEmail = _userRepo.GetUserByEmail(loginUser.Email);
            var CheckShopEmail = _shopRepo.GetShopByEmail(loginUser.Email);
            if (CheckUserEmail != null)
            {
                if (loginUser.Password == CheckUserEmail.Password)
                {
                    return (CheckUserEmail, null);
                }
            }
            if (CheckShopEmail != null)
            {
                if (loginUser.Password == CheckShopEmail.Password)
                {
                    return (null, CheckShopEmail);
                }
            }
            return (null, null);
        }
        public UserUpdateDto CheckUserUsername(UserUpdateDto updateUser)
        {
            var UserUsername = _userRepo.GetUserByUsername(updateUser.Username);
            var ShopUsername = _shopRepo.GetShopByUsername(updateUser.Username);
            if (UserUsername == null && ShopUsername == null)
            {
                return updateUser;
            }
            return null;
        }
        public ShopUpdateDto CheckShopUsername(ShopUpdateDto updateShop)
        {
            var UserUsername = _userRepo.GetUserByUsername(updateShop.Username);
            var ShopUsername = _shopRepo.GetShopByUsername(updateShop.Username);
            if (UserUsername == null && ShopUsername == null)
            {
                return updateShop;
            }
            return null;
        }
    }
}
