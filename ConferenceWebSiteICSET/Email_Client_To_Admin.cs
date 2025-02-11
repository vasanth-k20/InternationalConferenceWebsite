using System.Net.Mail;

namespace ConferenceWebSiteICSET
{
    public class Email_Client_To_Admin
    {
        public bool email_Client_To_Admin(string userEmail, string userName, long Phonenumber, string queryMessage)
        {
            try
            {
                MailMessage newMail = new MailMessage();
                SmtpClient client = new SmtpClient("smtp.gmail.com");

                // Email is sent from the admin's email
                newMail.From = new MailAddress("vasanthkbit@gmail.com", "Conference Website Concern");

                // Admin receives the email
                newMail.To.Add("vasanthkbit@gmail.com");

                // "Reply-To" ensures the admin can reply directly to the user's email
                newMail.ReplyToList.Add(new MailAddress(userEmail));

                newMail.Subject = $"Conference Website Concern from {userName}";
                newMail.IsBodyHtml = true;
                newMail.Body = $"<h3>Concern Regarding the Conference Website</h3>" +
                               $"<p>Dear Team,</p>" +
                               $"<p>I hope this email finds you well. A user has submitted a concern regarding the conference website. Please find the details below:</p>" +
                               $"<p><b></p>" +
                               $"<p><b>Email:</b> {userEmail}</p>" +
                               $"<p><b>Phone Number:</b> {Phonenumber}</p>" +
                               $"<p><b>Message: {queryMessage}</b></p>" +
                               $"<p>Best regards,</p>" +
                               $"<p>{userName}</p>";



                client.EnableSsl = true;
                client.Port = 587;
                client.Credentials = new System.Net.NetworkCredential("vasanthkbit@gmail.com", "ulnl ekap nkgp skuc");

                // Send the email
                client.Send(newMail);
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error - " + ex.Message);
                return false;
            }
        }
    }
}
