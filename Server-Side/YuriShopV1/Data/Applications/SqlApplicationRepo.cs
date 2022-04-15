using YuriShopV1.Data.Users;
using YuriShopV1.Models;
using System.Linq;
using System.Collections.Generic;
using System;

namespace YuriShopV1.Data.Applications
{
    public class SqlApplicationRepo : IApplicationRepo
    {
        private readonly YuriShopContext _context;

        public SqlApplicationRepo(YuriShopContext context)
        {
            _context = context;
        }

        public IEnumerable<Application> GetAllApplications()
        {
            return _context.Application.ToList();
        }

        public Application GetApplicationById(int id)
        {
            return _context.Application.FirstOrDefault(p => p.ApplicationId == id);
        }

        public void CreateApplication(Application application)
        {
            if (application == null)
            {
                throw new ArgumentNullException(nameof(application));
            }
            _context.Application.Add(application);
        }
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
