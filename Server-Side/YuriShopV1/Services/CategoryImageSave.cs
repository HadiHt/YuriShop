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
        public async Task<string> SaveCategory(string base64)
        {
            try
            {
                if(base64.Length >0)
                {
                    string[] arr = base64.Split(":");
                    if (!Directory.Exists(_environment.WebRootPath + "\\Categories\\"))
                    {
                        Directory.CreateDirectory(_environment.WebRootPath + "\\Categories\\");
                    }
                        File.WriteAllBytes(_environment.WebRootPath + "\\Categories\\" + arr[0]+".jpg", Convert.FromBase64String(arr[1]));
                        return "\\Categories\\"+arr[0];
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
