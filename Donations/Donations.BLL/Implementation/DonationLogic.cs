using System;
using Donations.DAL.Models;
using System.Collections.Generic;
using Donations.DAL.Repository.Implementation;
using System.Net.Mail;

namespace Donations.BLL.Implementation
{
    public class DonationLogic
    {
        private DonationRepository _donationRepository;
        public DonationLogic(DonationRepository donationRepository)
        {
            _donationRepository = donationRepository;
        }

        public Donation CreateDonation(Donation donation)
        {
            if (donation.sum>1000)
            {
                var message = new MailMessage();
                message.To.Add(new MailAddress("2045re@gmail.com"));
                message.From = new MailAddress("");
                message.Subject = "Thanks for the donation";
                message.IsBodyHtml = true;
            }
            return _donationRepository.Insert(donation);
        }

        public ICollection<Donation> GettAllDonation()
        {
            return _donationRepository.GetAll();
        }

        public Donation GetDonationById(Guid id)
        {
            return _donationRepository.GetById(id);
        }

        public void UpdateDonation(Guid id, Donation donation)
        {
            _donationRepository.Update(id, donation);
        }

        public void DeleteDonation(Guid id)
        {
            var donation = this.GetDonationById(id);
            if (donation == null)
            {
                throw new Exception("Donation does not exist");
            }
           _donationRepository.Delete(donation);
        }
    }
}
