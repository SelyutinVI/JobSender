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
        public List<String> To { get; set; }
        public String Subject { get; set; }
        public String Body { get; set; }

        public async Task Send(Message j)
        {
            try
            {
                var mes = new MimeMessage();

                mes.From.Add(new MailboxAddress("sunscreed1@gmail.com"));
                foreach (var to in j.To)
                {
                    mes.To.Add(new MailboxAddress(to.Trim()));
                }
                mes.Subject = j.Subject;
                mes.Body = new BodyBuilder() { TextBody = j.Body }.ToMessageBody();
                using (MailKit.Net.Smtp.SmtpClient client = new MailKit.Net.Smtp.SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 25, false);
                    client.Authenticate("sunscreed1@gmail.com", "svic..azen92276");
                    await client.SendAsync(mes);

                    client.Disconnect(true);

                }
            }
            catch
            {

            }

        }
    }
}
