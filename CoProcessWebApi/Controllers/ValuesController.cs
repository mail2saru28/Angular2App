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

        [HttpGet]
        [Route("getAllProductOwnerResponsibilities")]
        public NetList<ProductOwnerResponsibility> GetAllProductOwnerResponsibilities()
        {
            var response = new NetList<ProductOwnerResponsibility>();
            try
            {
                var data = db.ProductOwnerResponsibilities.ToList();
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
        [HttpGet]
        [Route("getArchitectResponsibilities")]
        public NetList<ArchitectResponsibility> GetArchitectResponsibilities()
        {
            var response = new NetList<ArchitectResponsibility>();
            try
            {
                var data = db.ArchitectResponsibilities.ToList();
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
        [HttpGet]
        [Route("getAllManagerResponsibilities")]
        public NetList<Manager> GetAllManagerResponsibilities()
        {
            var response = new NetList<Manager>();
            try
            {
                var data = db.Managers.ToList();
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
        [HttpGet]
        [Route("getDevTeamResponsibilities")]
        public NetList<DevTeam> GetDevTeamresponsibilities()
        {
            var response = new NetList<DevTeam>();
            try
            {
                var data = db.DevTeams.ToList();
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

        [HttpGet]
        [Route("getAllQAResponsibilities")]
        public NetList<QA> GetAllQAResponsibilities()
        {
            var response = new NetList<QA>();
            try
            {
                var data = db.QAs.ToList();
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
        [HttpGet]
        [Route("getAllScrumMasterResponsibilities")]
        public NetList<ScrumMaster> GetAllScrumMasterResponsibilities()
        {
            var response = new NetList<ScrumMaster>();
            try
            {
                var data = db.ScrumMasters.ToList();
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
    }
}
