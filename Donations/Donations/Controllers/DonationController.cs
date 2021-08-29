using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Donations.BLL.Implementation;
using Microsoft.AspNetCore.Mvc;
using Donations.DAL.Models;
using Microsoft.AspNetCore.Http;

namespace Donations.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DonationController : ControllerBase
    {
        private DonationLogic _donationLogic;

        public DonationController(DonationLogic donationLogic)
        {
            _donationLogic = donationLogic;
        }

        [HttpGet]
        public ActionResult<string> Get()
        {
            var allDonation = _donationLogic.GettAllDonation();
            return StatusCode(StatusCodes.Status200OK, allDonation);
        }

       [HttpGet("{id}")]
        public ActionResult<string> Get(Guid id)
        {
            var donation = _donationLogic.GetDonationById(id);
            return StatusCode(StatusCodes.Status200OK, donation);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Donation donation)
        {
           var insertedDonation = _donationLogic.CreateDonation(donation);
            if (insertedDonation == null)
            {
                throw new Exception("Error in create new Donation");
            }
            return StatusCode(StatusCodes.Status201Created, insertedDonation);
        }

        [HttpPut("{id}")]
        public ActionResult<string> Put(Guid id, [FromBody] Donation donation)
        {
            _donationLogic.UpdateDonation(id, donation);
            return StatusCode(StatusCodes.Status200OK);
        }


         [HttpDelete("{id}")]
        public ActionResult<string> Delete(Guid id)
        {
            _donationLogic.DeleteDonation(id);
            return StatusCode(StatusCodes.Status200OK);
        }
    }
}
