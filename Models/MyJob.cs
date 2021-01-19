using Hangfire;
using MimeKit;
using Sender.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSender.Models
{
    public class MyJob
    {
        public int ID { get; set; }
        public String Title { get; set; }
        public String Cron { get; set; }
        public Message Message { get; set; }
       
    }
}
