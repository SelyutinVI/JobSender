using Hangfire;
using Hangfire.Storage;
using MimeKit;
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
        public Message Message { get; set; } //object qwe;
        public String Next {
            get
            {
                using (var connection = JobStorage.Current.GetConnection())
                {
                    return connection.GetRecurringJobs().FirstOrDefault(p => p.Id == this.Title).NextExecution.Value.ToLocalTime().ToString();
                }
            }
        }

    }
}
