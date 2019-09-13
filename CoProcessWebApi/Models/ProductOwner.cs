using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace CoProcessWebApi.Models
{
    public class ProductOwnerResponsibility
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}