using ConferenceWebSiteICSET.Models;
using Microsoft.AspNetCore.Mvc;

namespace ConferenceWebSiteICSET.Controllers
{
    public class Authors_DeskController : Controller
    {
        public IActionResult Key_Date()
        {
            return View();
        }
        public IActionResult Journal_Publication()
        {
            return View();
        }
        public IActionResult Registration_Details()
        {
            return View();
        }

        public IActionResult New_paper_submission()
        {
            return View();
        }

        [HttpPost]
        public IActionResult NewPaperSubmission(NewpaperSub details)
        {

            string selectedCategory = details.AuthorCategory;


            Console.WriteLine("Selected Category: " + selectedCategory);

            Newpapersubdetails e = new Newpapersubdetails();
            //ResponseEmail re = new ResponseEmail();

            bool response = e.email_Client_To_Admin(details.Papertitle, details.AuthorFullName, details.AuthorMobile, details.AuthorEmail, details.AuthorInstitution, selectedCategory, details.PaperFile);

            if (response)
            {
                //re.responseEmail(details.AuthorEmail);
                TempData["Message"] = "Your paper has been successfully sent!";
                TempData["MessageType"] = "success";
            }
            else
            {
                TempData["Message"] = "There was an error while sending the paper. Please try again.";
                TempData["MessageType"] = "error";
            }

            return RedirectToAction("New_Paper_Submission", "Authors_Desk");


        }
    }
}
