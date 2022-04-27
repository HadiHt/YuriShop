using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Threading.Tasks;

namespace YuriShopV1.Services
{
    public class ProfileImageSave
    {
        private readonly IWebHostEnvironment _environment;

        public ProfileImageSave(IWebHostEnvironment environment)
        {
            _environment = environment;
        }
        public async Task<string> SaveProfile(IFormFile objFile)
        {
            try
            {
                if (objFile.Length > 0)
                {
                    if (!Directory.Exists(_environment.WebRootPath + "\\Profiles\\"))
                    {
                        Directory.CreateDirectory(_environment.WebRootPath + "\\Profiles\\");
                    }
                    await using (FileStream fileStream = System.IO.File.Create(_environment.WebRootPath + "\\Profiles\\" + objFile.FileName))
                    {
                        objFile.CopyTo(fileStream);
                        fileStream.Flush();
                        return "\\Profiles\\" + objFile.FileName;
                    }
                }
                else
                {
                    return "failed";
                }
            }
            catch (Exception e)
            {
                return e.Message.ToString();
            }
        }
    }
}
