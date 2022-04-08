using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YuriShopV1.Data;
using YuriShopV1.Data.Users;

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

            services.AddScoped<IAddressRepo, MockDbContextcs>();
            //services.AddScoped<ICardRepo, MockDbContextcs>();
            //services.AddScoped<IOrderRepo, MockDbContextcs>();
            //services.AddScoped<IProductRepo, MockDbContextcs>();
            //services.AddScoped<IShopRepo, IShopRepo>();
            //services.AddScoped<IUserRepo, IUserRepo>();
            //services.AddScoped<IWishListRepo, IWishListRepo>();

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

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
