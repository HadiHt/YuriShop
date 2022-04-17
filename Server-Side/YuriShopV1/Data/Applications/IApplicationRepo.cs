using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Data.Applications
{
    public interface IApplicationRepo
    {
        Application GetApplicationById(int id);
        IEnumerable<Application> GetAllApplications();
        void CreateApplication(Application application);
        bool SaveChanges();
    }
}
