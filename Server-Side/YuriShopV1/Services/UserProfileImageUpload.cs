using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace YuriShopV1.Services
{
    public class UserProfileImageUpload
    {
        private byte[] list { get; set; }

        private readonly IWebHostEnvironment _environment;
        public UserProfileImageUpload(IWebHostEnvironment environment)
        {
            _environment = environment;
        }
        public async Task<string> UploadProfile(string id)
        {
            try
            {
                if (!Directory.Exists(_environment.WebRootPath + "\\UsersProfiles\\"))
                {
                    return null;
                }
                else
                {
                    var userImagesPath = Path.Combine(_environment.WebRootPath + "\\UsersProfiles\\"+id+".jpg");

                    FileInfo fileInfo = new FileInfo(userImagesPath);
                    list = (File.ReadAllBytes(fileInfo.FullName));
                    string filee = Convert.ToBase64String(list);
                    return filee;
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message.ToString());
                return null;
            }
        }
    }
}
