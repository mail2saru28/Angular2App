using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CoProcessWebApi.Common
{
    public class NetList<T>
    {
        public NetList()
        {
            Collection = new List<T>();
        }
        public Guid Token { get; set; }

        public ResponseStatus Status { get; set; }

        public int PageNumber { get; set; }
        public int TotalRecord { get; set; }
        public string Message { get; set; }

        public Exception Exception { get; set; }

        public List<T> Collection { get; set; }

        public string LastIP { get; set; }
    }
}
