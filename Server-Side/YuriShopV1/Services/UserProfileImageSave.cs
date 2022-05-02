using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Threading.Tasks;

namespace YuriShopV1.Services
{
    public class UserProfileImageSave
    {
        private readonly IWebHostEnvironment _environment;

        public UserProfileImageSave(IWebHostEnvironment environment)
        {
            _environment = environment;
        }
        public async Task<string> SaveProfile(string base64)
        {
            try
            {
                if (base64.Length > 0)
                {
                    string[] arr = base64.Split(":");
                    if (!Directory.Exists(_environment.WebRootPath + "\\UsersProfiles\\"))
                    {
                        Directory.CreateDirectory(_environment.WebRootPath + "\\UsersProfiles\\");
                    }
                    File.WriteAllBytes(_environment.WebRootPath + "\\UsersProfiles\\" + arr[0] + ".jpg", Convert.FromBase64String(arr[1]));
                    return "\\UsersProfiles\\" + arr[0];
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
