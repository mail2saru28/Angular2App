using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoProcessWebApi.Models
{
    public class Link
    {
        [Key]
        public int LinkId { get; set; }
        public string LinkName { get; set; }
    }
}