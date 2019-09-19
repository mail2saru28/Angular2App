using System.Data.Entity;
using CoProcessWebApi.Models;

namespace CoProcessWebApi.Context
{
    public class DatabaseContext :DbContext
    {
        public DatabaseContext() : base("DefaultConnection") { }

        public DbSet<Role> Roles { get; set; }
        public DbSet<Link> Links { get; set; }
        public DbSet<People> Peoples { get; set; }
        public DbSet<Process> Processes { get; set; }
        public DbSet<Tools> Tools { get; set; }
        public DbSet<ProductOwnerResponsibility> ProductOwnerResponsibilities { get; set; }
        public DbSet<ArchitectResponsibility> ArchitectResponsibilities { get; set; }
        public DbSet<Manager> Managers { get; set; }
        public DbSet<DevTeam> DevTeams { get; set; }

        public DbSet<QA> QAs { get; set; }
        public DbSet<ScrumMaster> ScrumMasters { get; set; }

    }

    
}