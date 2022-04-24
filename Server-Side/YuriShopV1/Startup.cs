using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using YuriShopV1.Data;
using YuriShopV1.Data.Addresses;
using YuriShopV1.Data.Applications;
using YuriShopV1.Data.Cards;
using YuriShopV1.Data.Orders;
using YuriShopV1.Data.Products;
using YuriShopV1.Data.Shops;
using YuriShopV1.Data.Users;
using YuriShopV1.Data.WishLists;
using YuriShopV1.Services;

namespace YuriShopV1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<YuriShopContext>(opt => opt.UseSqlServer(
                Configuration.GetConnectionString("YuriConnection")));

            services.AddControllers();
            services.AddTransient<CategoryImageSave>();
            services.AddTransient<CategoryImageUpload>();
            services.AddTransient<ProfileImageSave>();
            services.AddTransient<ProfileImageUpload>();

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            services.AddScoped<IAddressRepo, SqlAddressRepo>();
            services.AddScoped<ICardRepo, SqlCardRepo>();
            services.AddScoped<IOrderRepo, SqlOrderRepo>();
            services.AddScoped<IProductRepo, SqlProductRepo>();
            services.AddScoped<IShopRepo, SqlShopRepo>();
            services.AddScoped<IUserRepo, SqlUserRepo>();
            services.AddScoped<IWishListRepo, SqlWishListRepo>();
            services.AddScoped<IApplicationRepo, SqlApplicationRepo>();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "YuriShopV1", Version = "v1" });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "YuriShopV1 v1"));
            }
            //else
            //{
            //    app.UseHsts();
            //}
            app.Use(async (context, next) =>
            {
                context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
                context.Response.Headers.Add("X-XSS-Protection", "1");
                context.Response.Headers.Add("X-Frame-Options", "SAMEORIGIN");
                context.Response.Headers.Add("Referrer-Policy", "no-referrer");
                await next();
            });
            app.UseCors(builder => builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseCors();
            app.UseAuthorization();
            app.UseStaticFiles();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Could Not Find Folder");
            //});
        }
    }
}
