using MimeKit;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JobSender.Models
{
    public class Message
    {

        public int ID { get; set; }
        public String Form { get; set; }
        public List<String> To { get; set; }
        public String Subject { get; set; }
        public TimeSpan Span { get; set; }
        public bool Status { get; set; }
        public String Body { get; set; }

        public async Task Send(Message j)
        {
            
        }
    }
}
