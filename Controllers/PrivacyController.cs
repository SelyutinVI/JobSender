using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSender.Controllers
{
    public class PrivacyController : Controller
    {
        // GET: PrivacyController
        public ActionResult Index()
        {
            return View();
        }

        // GET: PrivacyController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: PrivacyController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PrivacyController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PrivacyController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: PrivacyController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PrivacyController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: PrivacyController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
