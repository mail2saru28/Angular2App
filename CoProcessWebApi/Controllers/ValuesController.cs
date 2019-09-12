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
    [RoutePrefix("api/values")]
    public class ValuesController : ApiController
    {
        private DatabaseContext db = new DatabaseContext();

        // GET api/values/getAllRoles

        [HttpGet]
        [Route("getAllRoles")]
        public NetList<Role> GetAllRoles()
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


        // GET api/values/getAllLinks
        [HttpGet]
        [Route("getAllLinks")]
        public NetList<Link> GetAllLinks()
        {
            var response = new NetList<Link>();
            try
            {
                var data = db.Links.ToList();
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


        // GET api/values/getAllLinks
        [HttpGet]
        [Route("getLinksByLinkId/{linkId}")]
        public NetList<LinkData> GetLinksByLinkId(int linkId)
        {
            var response = new NetList<LinkData>();
            var linkData = new LinkData();
            try
            {
                linkData.processes = db.Processes.Where(x => x.LinkId == linkId).ToList();
                linkData.peoples = db.Peoples.Where(x => x.LinkId == linkId).ToList();
                linkData.tools = db.Tools.Where(x => x.LinkId == linkId).ToList();

               
                response.Collection = new List<LinkData> { linkData};
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


    }
}
