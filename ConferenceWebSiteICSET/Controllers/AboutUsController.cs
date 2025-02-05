using Microsoft.AspNetCore.Mvc;

namespace ConferenceWebSiteICSET.Controllers
{
    public class AboutUsController : Controller
    {
        public IActionResult About_the_Conference()
        {
            return View();
        }

        public IActionResult Scope_of_conference()
        {
            return View();
        }

        public IActionResult Origizing_Comittee()
        {
            return View();
        }

        public IActionResult Editorial_Board()
        {
            return View();
        }
    }
}
