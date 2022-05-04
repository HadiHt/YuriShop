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

        public async Task<List<string>> UploadProducts(List<string> listt)
        {
            try
            {
                if (!Directory.Exists(_environment.WebRootPath + "\\Products\\"))
                {
                    return null;
                }
                else
                {
                    foreach (string element in listt)
                    {
                        
                        var elementSpaceless = element.Replace(" ", String.Empty);
                        var ProductImagesPath = Path.Combine(_environment.WebRootPath + "\\Products\\" + elementSpaceless + ".jpg");
                        Console.WriteLine(ProductImagesPath);

                        FileInfo fileInfo = new FileInfo(ProductImagesPath);
                        byteArray = (File.ReadAllBytes(fileInfo.FullName));
                        string filee = Convert.ToBase64String(byteArray);
                        StringList.Add(filee);
                        byteArray = null;
                    }
                    return StringList;
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
