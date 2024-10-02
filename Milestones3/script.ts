
const form = document.getElementById("resume-form") as HTMLFormElement
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement

// Form submission handling

form.addEventListener("submit", (e:Event) => {
    e.preventDefault();  // prevent page reload

    // get all input values

    const name= (document.getElementById("name") as HTMLInputElement).value
    const email= (document.getElementById("email") as HTMLInputElement).value
    const phone= (document.getElementById("phone") as HTMLInputElement).value
    const education= (document.getElementById("education") as HTMLInputElement).value
    const experience= (document.getElementById("experience") as HTMLInputElement).value
    const skills= (document.getElementById("skills") as HTMLInputElement).value

    // Generate the resume dynamically

    const resumeHtml = `
    
    <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Dynamically Generated Resume</u></b></h2>
    <h3><b><u><i><mark> Personal Information:  </mark></i></u></b></h3>
    <p><b>Name: </b> ${name}</p>
    <p><b>Email: </b> ${email}</p>
    <p><b>Phone: </b> ${phone}</p>
    
    <h3><b><u><i><mark> Education:  </mark></i></u></b></h3>
    <p>${education}</p>
    
    <h3><b><u><i><mark> Experience: </mark></i></u></b></h3>
    <p>${experience}</p>
    
    <h3><b><u><i><mark> Skills:  </mark></i></u></b></h3>  
    <p>${skills}</p>

    `;

    // Display the generated resume
    if(resumeDisplay)  
        {
            resumeDisplay.innerHTML=resumeHtml

    } else {
        console.error("Missing Resume Display");
    }

 })