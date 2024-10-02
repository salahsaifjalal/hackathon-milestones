
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
    
    <h2><b><u>Editable Resume</u></b></h2>
    <h3><b><u><i><mark> Personal Information:  </mark></i></u></b></h3>
    <p><b>Name: </b> <span contentditable="true">${name}</span></p>
    <p><b>Email: </b> <span contentditable="true">${email}</span></p>
    <p><b>Phone: </b> <span contentditable="true">${phone}</span></p>
    
    <h3><b><u><i><mark> Education:  </mark></i></u></b></h3>
    <p contentditable="true">${education}</p>
    
    <h3><b><u><i><mark> Experience: </mark></i></u></b></h3>
    <p contentditable="true">${experience}</p>
    
    <h3><b><u><i><mark> Skills:  </mark></i></u></b></h3>  
    <p contentditable="true">${skills}</p>

    `;

    // Display the generated resume
    if(resumeDisplay)  
        {
            resumeDisplay.innerHTML=resumeHtml

    } else {
        console.error("Missing Resume Display");
    }

 })