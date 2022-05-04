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
        private readonly ProductImageSave _productImageSave;
        private readonly ProductImageUpload _productImageUpload;

        private List<string> list;

        public ImagesController(CategoryImageSave categoryImageSave, CategoryImageUpload categoryImageUpload, UserProfileImageSave profileImageSave, UserProfileImageUpload profileImageUpload, ShopProfileImageSave shopProfileImageSave, ShopProfileImageUpload shopProfileImageUpload, ProductImageSave productImageSave, ProductImageUpload productImageUpload)
        {
            _categoryImageSave = categoryImageSave;
            _categoryImageUpload = categoryImageUpload;
            _profileImageSave = profileImageSave;
            _profileImageUpload = profileImageUpload;
            _shopProfileImageSave = shopProfileImageSave;
            _shopProfileImageUpload = shopProfileImageUpload;
            _productImageSave = productImageSave;
            _productImageUpload = productImageUpload;
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

        [HttpPost("Product")]
        public async Task<string> SaveProductImage()
        {
            Request.EnableBuffering();
            Request.Body.Position = 0;
            var rawRequestBody = await new StreamReader(Request.Body).ReadToEndAsync();
            return await (_productImageSave.SaveProduct(rawRequestBody));
        }
        [HttpGet("Product/{id}")]
        public async Task<string> GetProductImageById(string id)
        {
            return (_productImageUpload.UploadProduct(id));
        }
        [HttpPost("Products")]
        public async Task<List<string>> GetProductsImagesByIds()
        {
            Request.EnableBuffering();
            Request.Body.Position = 0;
            var rawRequestBody = await new StreamReader(Request.Body).ReadToEndAsync();
            var splitArray = rawRequestBody.Split(",");
            foreach (string element in splitArray)
            {
                Console.WriteLine(element);
                list.Add(_productImageUpload.UploadProduct(element));
            }
            Console.WriteLine(list);
            return list;
        }

    }
}
