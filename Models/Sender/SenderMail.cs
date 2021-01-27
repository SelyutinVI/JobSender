using Hangfire;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSender.Models.Sender
{
    public class SenderMail
    {
        public void Start(MyJob j)
        {
            RecurringJob.AddOrUpdate<SenderMail>(j.Title, m => m.SendEmailAsync(j.Message), j.Cron, TimeZoneInfo.FindSystemTimeZoneById("Ekaterinburg Standard Time"));
        }
        public async Task SendEmailAsync(Message j)
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
