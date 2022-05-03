using AutoMapper;
using System.Threading.Tasks;
using YuriShopV1.Data.Users;
using YuriShopV1.Dtos.Users;
using YuriShopV1.Models;

namespace YuriShopV1.Services
{
    public class UserManager
    {
        private readonly IUserRepo _userRepo;
        private readonly IMapper _mapper;

        public UserManager(IUserRepo userRepo, IMapper mapper)
        {
            _userRepo = userRepo;
            _mapper = mapper;
        }
        public User CheckEmailAndPassword(UserWriteDto loginUser)
        {
            var CheckEmail = _userRepo.GetUserByEmail(loginUser.Email);
            if (CheckEmail != null)
            {
                if (loginUser.Password == CheckEmail.Password)
                {
                    return CheckEmail;
                }
                return null;      
            }
            return null;
        }
    }
}
