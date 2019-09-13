using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoProcessWebApi.Models
{
    public class Process
    {
        [Key]
        public int ProcessId { get; set; }
        public string ProcessName { get; set; }
        public int LinkId { get; set; }
        public int RoleId { get; set; }
        public string Description { get; set; }

    }
}