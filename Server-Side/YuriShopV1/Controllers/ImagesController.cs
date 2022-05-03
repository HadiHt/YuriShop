using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using YuriShopV1.Services;

namespace YuriShopV1.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        public readonly CategoryImageSave _categoryImageSave;
        private readonly CategoryImageUpload _categoryImageUpload;
        private readonly UserProfileImageSave _profileImageSave;
        private readonly UserProfileImageUpload _profileImageUpload;
        private readonly ShopProfileImageSave _shopProfileImageSave;
        private readonly ShopProfileImageUpload _shopProfileImageUpload;

        public ImagesController(CategoryImageSave categoryImageSave, CategoryImageUpload categoryImageUpload, UserProfileImageSave profileImageSave, UserProfileImageUpload profileImageUpload, ShopProfileImageSave shopProfileImageSave, ShopProfileImageUpload shopProfileImageUpload)
        {
            _categoryImageSave = categoryImageSave;
            _categoryImageUpload = categoryImageUpload;
            _profileImageSave = profileImageSave;
            _profileImageUpload = profileImageUpload;
            _shopProfileImageSave = shopProfileImageSave;
            _shopProfileImageUpload = shopProfileImageUpload;
        }
        [HttpPost("Category")]
        public async Task<string> SaveCategoryImage()
        {
            Request.EnableBuffering();
            Request.Body.Position = 0;
            var rawRequestBody = await new StreamReader(Request.Body).ReadToEndAsync();
            return await (_categoryImageSave.SaveCategory(rawRequestBody));
            
        }
        [HttpGet("Category")]
        public async Task<List<string>> UploadCategoryImage()
        {
            return await (_categoryImageUpload.UploadCategory());
        }
        [HttpPost("UserProfile")]
        public async Task<string> SaveUserProfileImage()
        {
            Request.EnableBuffering();
            Request.Body.Position = 0;
            var rawRequestBody = await new StreamReader(Request.Body).ReadToEndAsync();
            return await (_profileImageSave.SaveProfile(rawRequestBody));
        }
        [HttpGet("UserProfile/{id}")]
        public async Task<string> GetUserProfileImageById(string id)
        {
            return await (_profileImageUpload.UploadProfile(id));
        }

        [HttpPost("ShopProfile")]
        public async Task<string> SaveShopProfileImage()
        {
            Request.EnableBuffering();
            Request.Body.Position = 0;
            var rawRequestBody = await new StreamReader(Request.Body).ReadToEndAsync();
            return await (_shopProfileImageSave.SaveProfile(rawRequestBody));
        }
        [HttpGet("ShopProfile/{id}")]
        public async Task<string> GetShopProfileImageById(string id)
        {
            return await (_shopProfileImageUpload.UploadProfile(id));
        }

    }
}
