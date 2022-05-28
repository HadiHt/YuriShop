using System;
using System.Net;
using System.Net.Mail;
using System.Threading;
using YuriShopV1.Models;

namespace YuriShopV1.Services
{
    public class AutoMailer
    {

        public void SendMail(string subject, string to,string body)
        {
            MailMessage msg = new();
            msg.From = new MailAddress("YuriShopLB@gmail.com");
            msg.To.Add(to);
            msg.Body = body;
            msg.IsBodyHtml = true;
            msg.Subject = subject;
            SmtpClient smt = new SmtpClient
            {
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                EnableSsl = true,
                Host = "smtp.gmail.com",
                Port = 587,
                Credentials = new NetworkCredential("YuriShopLB@gmail.com", "YuriShopLB123"),
            };
            smt.Send(msg);
        }
    }

}
