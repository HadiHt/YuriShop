using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace YuriShopV1.Services
{
    public class CategoryImageUpload
    {
        public byte[] list { get; set; }
        public List<string> stringlist = new List<string>();
        public class FileManagerModel
        {
            public FileInfo[] Files { get; set; }
        }


        private readonly IWebHostEnvironment _environment;
        public CategoryImageUpload(IWebHostEnvironment environment)
        {
            _environment = environment;
        }
        public async Task<List<string>> UploadCategory()
        {
            try
            {
                if (!Directory.Exists(_environment.WebRootPath + "\\Categories\\"))
                {
                    return null;
                }
                else
                {
                    FileManagerModel model = new();
                    var userImagesPath = Path.Combine(_environment.WebRootPath + "\\Categories\\");
                    DirectoryInfo dir = new(userImagesPath);
                    FileInfo[] files = dir.GetFiles();
                    foreach (var file in files)
                    {
                        list =(File.ReadAllBytes(file.FullName));
                        string filee = Convert.ToBase64String(list);
                        var x = file.Name.Split(".");
                        stringlist.Add(x[0] +":"+filee);
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
