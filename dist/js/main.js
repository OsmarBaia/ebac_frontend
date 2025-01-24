let toggleButton=document.querySelector("button"),style=(toggleButton.addEventListener("click",()=>{document.body.classList.toggle("dark-mode")}),document.createElement("style"));style.innerHTML=`
    body.dark-mode {
        background-color: #121212;
        color: #f1f1f1;
    }

    body.dark-mode .email-container {
        background-color: #1e1e1e;
        border-color: #333;
    }

    body.dark-mode .email-header {
        background-color: #FFD700;
    }

    body.dark-mode .happy-tail,
    body.dark-mode .pet-of-the-month {
        background-color: #444;
    }

    body.dark-mode .email-footer {
    color: #fff;
        background-color: #333;
    }

     body.dark-mode .announcements{
     color: #333;}

    body.dark-mode .social-links a {
        color: #FFD700;
    }
`,document.head.appendChild(style);