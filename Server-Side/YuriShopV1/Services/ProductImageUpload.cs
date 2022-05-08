using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace YuriShopV1.Services
{
    public class ProductImageUpload
    {
        private byte[] byteArray { get; set; }
        private List<string> StringList { get; set; }

        private readonly IWebHostEnvironment _environment;
        public ProductImageUpload(IWebHostEnvironment environment)
        {
            _environment = environment;
        }
        public string UploadProduct(string id)
        {
            try
            {
                if (!Directory.Exists(_environment.WebRootPath + "\\Products\\"))
                {
                    return null;
                }
                else
                {
                    var ProductImagesPath = Path.Combine(_environment.WebRootPath + "\\Products\\" + id + ".jpg");

                    FileInfo fileInfo = new FileInfo(ProductImagesPath);
                    byteArray = (File.ReadAllBytes(fileInfo.FullName));
                    string filee = Convert.ToBase64String(byteArray);
                    byteArray = null;

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
