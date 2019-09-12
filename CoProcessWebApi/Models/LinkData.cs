using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CoProcessWebApi.Models
{
    public class LinkData
    {
        public List<Process> processes { get; set; }
        public List<Tools> tools { get; set; }
        public List<People> peoples { get; set; }
    }
}