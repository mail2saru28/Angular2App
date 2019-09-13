using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoProcessWebApi.Models
{
    public class People
    {
        [Key]
        public int PeopleId { get; set; }
        public string PeopleName { get; set; }
        public int LinkId { get; set; }
        public int RoleId { get; set; }
        public string Description { get; set; }
        
    }
}