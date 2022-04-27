using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Threading.Tasks;

namespace YuriShopV1.Services
{
    public class CategoryImageSave
    {
        private readonly IWebHostEnvironment _environment;

        public CategoryImageSave(IWebHostEnvironment environment)
        {
            _environment = environment;
        }
        public async Task<string> SaveCategory (IFormFile objFile)
        {
            try
            {
                if(objFile.Length >0)
                {
                    if(!Directory.Exists(_environment.WebRootPath + "\\Categories\\"))
                    {
                        Directory.CreateDirectory(_environment.WebRootPath + "\\Categories\\");
                    }
                    await using (FileStream fileStream = System.IO.File.Create(_environment.WebRootPath + "\\Categories\\" + objFile.FileName))
                    {
                        objFile.CopyTo(fileStream);
                        fileStream.Flush();
                        return "\\Categories\\" + objFile.FileName;
                    }
                }
                else
                {
                    return "failed";
                }
            }
            catch(Exception e)
            {
                return e.Message.ToString();
            }
        }
    }
}
