using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Donations.DAL.Models
{
    public class Donation
    {
        public Guid id { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public int sum { get; set; }
        [Required]
        public string type { get; set; }
        [Required]
        public string yeud { get; set; }
        public string condition { get; set; }
        [Required]
        public float currencyRate { get; set; }
        [Required]
        public string currencyType { get; set; }
    }
}
