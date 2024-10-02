var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
// Form submission handling
form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload
    // get all input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate the resume dynamically
    var resumeHtml = "\n    \n    <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Dynamically Generated Resume</u></b></h2>\n    <h3><b><u><i><mark> Personal Information:  </mark></i></u></b></h3>\n    <p><b>Name: </b> ".concat(name, "</p>\n    <p><b>Email: </b> ").concat(email, "</p>\n    <p><b>Phone: </b> ").concat(phone, "</p>\n    \n    <h3><b><u><i><mark> Education:  </mark></i></u></b></h3>\n    <p>").concat(education, "</p>\n    \n    <h3><b><u><i><mark> Experience: </mark></i></u></b></h3>\n    <p>").concat(experience, "</p>\n    \n    <h3><b><u><i><mark> Skills:  </mark></i></u></b></h3>  \n    <p>").concat(skills, "</p>\n\n    ");
    // Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("Missing Resume Display");
    }
});
