using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoProcessWebApi.Models
{
    public class Role
    {
        [Key]
        public int RoleId { get; set; }
        public string RoleName { get; set; }
    }
}