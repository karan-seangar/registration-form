using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace registration_form.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult angularjs()
        {
           

            return View();
        }
        public ActionResult bootstrap()
        {

            return View();
        }
        public ActionResult RegistrationValidationForm()
        {

            return View();
        }
    }
}