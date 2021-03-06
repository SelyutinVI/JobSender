﻿using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Hangfire;
using JobSender.Data;
using JobSender.Models;
using JobSender.Models.Sender;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Sender.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace JobSender.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private MyDbContext _MyDbContext;

        public HomeController(ILogger<HomeController> logger, MyDbContext MyDbContext)
        {
            _logger = logger;
            _MyDbContext = MyDbContext;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpGet("LoadJobs")]
        public async Task<object> LoadJobs(DataSourceLoadOptions loadOptions)
        {
            var Q = _MyDbContext.Jobs.Include(j => j.Message);
            var query = await DataSourceLoader.LoadAsync(Q, loadOptions);
            return query;
        }

        [HttpPost("InsertJob")]
        public async Task<ActionResult> InsertJob(string values)
        {
            var newJob = new MyJob();
            JsonConvert.PopulateObject(values, newJob);
            await _MyDbContext.Jobs.AddAsync(newJob);
            await _MyDbContext.Messages.AddAsync(newJob.Message);
            await _MyDbContext.SaveChangesAsync();
            SenderMail a = new SenderMail();
            a.Start(newJob);
            return Ok();
        }

        [HttpDelete("DeleteJob")]
        public async Task<ActionResult> DeleteJob(int key)
        {
            RecurringJob.RemoveIfExists(_MyDbContext.Jobs.FirstOrDefault(j => j.ID==key).Title);
            _MyDbContext.Jobs.Remove(await _MyDbContext.Jobs.FirstOrDefaultAsync(j => j.ID == key));
            await _MyDbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("UpdateJob")]
        public async Task<ActionResult> UpdateJob(int key, string values)
        {
            var newValue = await _MyDbContext.Jobs.Include(j=>j.Message).FirstOrDefaultAsync(j => j.ID == key);
            JsonConvert.PopulateObject(values, newValue);
            SenderMail a = new SenderMail();
            a.Start(newValue);
            _MyDbContext.Jobs.Update(newValue);
            await _MyDbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
