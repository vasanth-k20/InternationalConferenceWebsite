using System.ComponentModel.DataAnnotations;

namespace ConferenceWebSiteICSET.Models
{
    public class NewpaperSub
    {

        [Required(ErrorMessage = "Please enter the paper title.")]
        public string Papertitle { get; set; }

        [Required(ErrorMessage = "Please enter the Author fullname.")]
        public string AuthorFullName { get; set; }

        [Required(ErrorMessage = "Please enter the Phone Number.")]
        public long AuthorMobile { get; set; }

        [Required(ErrorMessage = "Please enter the EmailID.")]
        public string AuthorEmail { get; set; }

        [Required(ErrorMessage = "Please enter the Institution Name.")]
        public string AuthorInstitution { get; set; }

        [Required(ErrorMessage = "Please select the author category.")]
        public string AuthorCategory { get; set; }

        [Required(ErrorMessage = "Please upload the Paper.")]
        public IFormFile PaperFile { get; set; }

    }
}
