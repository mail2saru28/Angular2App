using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using CoProcessWebApi.Models;

namespace CoProcessWebApi.Context
{
    public class DatabaseInitializer : DropCreateDatabaseIfModelChanges<DatabaseContext>
    {
        protected override void Seed(DatabaseContext context)
        {
            IList<Role> roles = new List<Role>();

            roles.Add(new Role() { RoleId = 1, RoleName = "Product Owner" });
            roles.Add(new Role() { RoleId = 2, RoleName = "Architect" });
            roles.Add(new Role() { RoleId = 3, RoleName = "Manager" });
            roles.Add(new Role() { RoleId = 4, RoleName = "Dev Team" });
            roles.Add(new Role() { RoleId = 5, RoleName = "QA" });
            context.Roles.AddRange(roles);
            base.Seed(context);
        }
    }

}