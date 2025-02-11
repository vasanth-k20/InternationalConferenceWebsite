
using ConferenceWebSiteICSET.Models;
using Microsoft.AspNetCore.Mvc;

namespace ConferenceWebSiteICSET.Controllers
{
    public class ContactFormController : Controller
    {
        [HttpPost]
        public IActionResult ContactForm1(ContactForm details)
        {
            if (!ModelState.IsValid)
            {
                var message = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).FirstOrDefault();
                TempData["Message"] = message;
                TempData["MessageType"] = "danger";
                return Redirect(Url.Action("Contact", "Home") + "#contact");
            }

            Email_Client_To_Admin c2a = new Email_Client_To_Admin();
            ResponseEmail re = new ResponseEmail();
            bool responseStatus = c2a.email_Client_To_Admin(details.Email, details.FirstName, details.PhoneNumber, details.Message);
            Console.WriteLine(responseStatus);

            if (responseStatus)
            {
                re.responseEmail(details.Email);
                TempData["Message"] = "Your email has been successfully sent!";
                TempData["MessageType"] = "success";
            }
            else
            {
                TempData["Message"] = "There was an error sending the email. Please try again.";
                TempData["MessageType"] = "danger";
            }

            return Redirect(Url.Action("Contact", "Home") + "#contact");
        }
    }
}
