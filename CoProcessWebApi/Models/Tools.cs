using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoProcessWebApi.Models
{
    public class Tools
    {
        [Key]
        public int ToolId { get; set; }
        public string ToolName { get; set; }
        public int LinkId { get; set; }
        public int RoleId { get; set; }
    }
}