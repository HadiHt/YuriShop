using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace YuriShopV1.Services
{
    public class ProfileImageUpload
    {
        public byte[] list { get; set; }
        public List<string> stringlist = new List<string>();
        public class FileManagerModel
        {
            public FileInfo[] Files { get; set; }
        }


        private readonly IWebHostEnvironment _environment;
        public ProfileImageUpload(IWebHostEnvironment environment)
        {
            _environment = environment;
        }
        public async Task<List<string>> UploadProfile()
        {
            try
            {
                if (!Directory.Exists(_environment.WebRootPath + "\\Profiles\\"))
                {
                    return null;
                }
                else
                {
                    FileManagerModel model = new();
                    var userImagesPath = Path.Combine(_environment.WebRootPath + "\\Profiles\\");
                    DirectoryInfo dir = new(userImagesPath);
                    FileInfo[] files = dir.GetFiles();
                    foreach (var file in files)
                    {
                        list = (File.ReadAllBytes(file.FullName));
                        string filee = Convert.ToBase64String(list);
                        stringlist.Add(filee);
                    }

                    return stringlist;
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
