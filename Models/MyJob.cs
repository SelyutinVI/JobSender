using Hangfire;
using Hangfire.Storage;
using JobSender.Models.JobSender;
using MimeKit;
using Newtonsoft.Json;
using Sender.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JobSender.Models
{
    public class MyJob 
    {
        [Key]
        public String Title { get; set; }
        public String Cron { get; set; }
        public String CronDesc { get; set; }
        public String ObjectJson { get; set; }
        public String ObjectType { get; set; }

        public String Next {
            get
            {
                using (var connection = JobStorage.Current.GetConnection())
                {
                    return connection.GetRecurringJobs().FirstOrDefault(p => p.Id == this.Title).NextExecution.Value.ToLocalTime().ToString();
                }
            }
        }

        public void Start()
        {
            switch (this.ObjectType)
            {
                case "Message":
                    {
                        var a = new Message();
                        JsonConvert.PopulateObject(this.ObjectJson, a);
                        RecurringJob.AddOrUpdate<Message>(this.Title, m => m.Send(a), this.Cron, TimeZoneInfo.FindSystemTimeZoneById("Ekaterinburg Standard Time"));
                        break;
                    }
                case "Object": 
                    {
                        var a = new Tester();
                        JsonConvert.PopulateObject(this.ObjectJson, a);
                        RecurringJob.AddOrUpdate<Tester>(this.Title, m => m.Test(), this.Cron, TimeZoneInfo.FindSystemTimeZoneById("Ekaterinburg Standard Time"));
                        break;
                    }

            }

        }


    }
}
