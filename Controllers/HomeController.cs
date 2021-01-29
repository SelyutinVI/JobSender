using CronExpressionDescriptor;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Hangfire;
using JobSender.Data;
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
using System.Net.Http;
using JobSender.Models.SignalR;
using Microsoft.AspNetCore.SignalR;
using JobSender.Models;

namespace JobSender.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private MyDbContext _MyDbContext;
        IHubContext<FirstHub> _hubContext ;
        public HomeController(ILogger<HomeController> logger, MyDbContext MyDbContext, IHubContext<FirstHub> hubcontext)
        {
            _logger = logger;
            _MyDbContext = MyDbContext;
            _hubContext = hubcontext;
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
            var Q = _MyDbContext.Jobs;
            var query = await DataSourceLoader.LoadAsync(Q, loadOptions);
            return query;
        }

        [HttpPost("InsertJob")]
        public async Task<ActionResult> InsertJob(string values)
        {
            var newJob = new MyJob();
            JsonConvert.PopulateObject(values, newJob);

            newJob.Title = newJob.Title.Trim();
            newJob.ObjectType = "Message";
            if (await _MyDbContext.Jobs.FirstOrDefaultAsync(j => j.Title == newJob.Title) != null)
                return StatusCode(409, "Задание с таким идентификатором уже существует");
            try
            {
                newJob.CronDesc =  ExpressionDescriptor.GetDescription(newJob.Cron, new Options()
                {
                    DayOfWeekStartIndexZero = true,
                    Use24HourTimeFormat = true,
                    Locale = "ru"
                });
            } 
            catch
            {
                return StatusCode(409, "Cron-расписание задано неверно!");
            }


            await _MyDbContext.Jobs.AddAsync(newJob);
            await _MyDbContext.SaveChangesAsync();
            newJob.Start();


            await _hubContext.Clients.All.SendAsync("insert", newJob);


            return Ok();
        }



        [HttpDelete("DeleteJob")]
        public async Task<ActionResult> DeleteJob(string key)
        {

            RecurringJob.RemoveIfExists(_MyDbContext.Jobs.FirstOrDefault(j => j.Title==key).Title);

            _MyDbContext.Jobs.Remove(await _MyDbContext.Jobs.FirstOrDefaultAsync(j => j.Title == key));
            await _MyDbContext.SaveChangesAsync();


            await _hubContext.Clients.All.SendAsync("remove", key);
            return Ok();
        }



        [HttpPut("UpdateJob")]
        public async Task<ActionResult> UpdateJob(string key, string values)
        {

            var newValue = await _MyDbContext.Jobs.FirstOrDefaultAsync(j => j.Title == key);
            JsonConvert.PopulateObject(values, newValue);

            try
            {
                newValue.CronDesc = ExpressionDescriptor.GetDescription(newValue.Cron, new Options()
                {
                    DayOfWeekStartIndexZero = true,
                    Use24HourTimeFormat = true,
                    Locale = "ru"
                });
            }
            catch
            {
                return StatusCode(409, "Cron-расписание задано неверно!");
            }
            
            
            newValue.Start();
            _MyDbContext.Jobs.Update(newValue);
            await _MyDbContext.SaveChangesAsync();


            await _hubContext.Clients.All.SendAsync("update", key, newValue);

            return Ok();
        }



        [HttpPost("Descriptor/{values}")]
        public async Task<string> Descriptor(string values)
        {

            try
            {
                return (ExpressionDescriptor.GetDescription(values, new Options()
                {
                    DayOfWeekStartIndexZero = true,
                    Use24HourTimeFormat = true,
                    Locale = "ru"
                }));
            }
            catch
            {
                return "Cron-расписание задано неверно!";
            }

        }
    }
}
