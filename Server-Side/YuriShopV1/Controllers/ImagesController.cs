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
        private readonly ProfileImageSave _profileImageSave;
        private readonly ProfileImageUpload _profileImageUpload;
        public ImagesController(CategoryImageSave categoryImageSave, CategoryImageUpload categoryImageUpload, ProfileImageSave profileImageSave, ProfileImageUpload profileImageUpload)
        {
            _categoryImageSave = categoryImageSave;
            _categoryImageUpload = categoryImageUpload;
            _profileImageSave = profileImageSave;
            _profileImageUpload = profileImageUpload;
        }
        [HttpPost("Category")]
        public async Task<string> SaveCategoryImage()
        {
            IFormFile objFile = Request.Form.Files.FirstOrDefault();
            return await (_categoryImageSave.SaveCategory(objFile));  
        }
        [HttpGet("Category")]
        public async Task<List<string>> UploadCategoryImage()
        {
            return await (_categoryImageUpload.UploadCategory());
        }
        [HttpPost("Profile")]
        public async Task<string> SaveProfileImage()
        {
            IFormFile objFile = Request.Form.Files.FirstOrDefault();
            return await (_profileImageSave.SaveProfile(objFile));
        }
        [HttpGet("Profile")]
        public async Task<List<string>> UploadProfileImage()
        {
            return await (_profileImageUpload.UploadProfile());
        }

    }
}
