using CoProcessWebApi.Common;
using CoProcessWebApi.Context;
using CoProcessWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CoProcessWebApi.Controllers
{
    public class ValuesController : ApiController
    {
        private DatabaseContext db = new DatabaseContext();

        // GET api/values
        public NetList<Role> Get()
        {
            var response = new NetList<Role>();
            try
            {
                var data = db.Roles.ToList();
                response.Collection = data;
                response.Status = ResponseStatus.Succeed;
            }
            catch (Exception ex)
            {

                response.Status = ResponseStatus.Failed;
                response.Message = ex.Message;
                response.Exception = ex;
            }

            return response;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
