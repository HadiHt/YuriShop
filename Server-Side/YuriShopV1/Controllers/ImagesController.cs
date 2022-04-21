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
        public readonly IFormFile file;
        public ImagesController(CategoryImageSave categoryImageSave, CategoryImageUpload categoryImageUpload)
        {
            _categoryImageSave = categoryImageSave;
            _categoryImageUpload = categoryImageUpload;
        }
        [HttpPost]
        public async Task<string> SaveCategoryImage()
        {
            IFormFile objFile = Request.Form.Files.FirstOrDefault();
            return await (_categoryImageSave.SaveCategory(objFile));  
        }
        [HttpGet]
        public async Task<List<string>> UploadCategoryImage()
        {
            return await (_categoryImageUpload.UploadCategory());
        }

    }
}
