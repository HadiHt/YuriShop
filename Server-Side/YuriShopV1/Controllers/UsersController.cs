using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
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
