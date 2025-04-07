// validating the login form for gwu student emails
document.addEventListener("DOMContentLoaded", () => {
    // link to the loginForm id
    const loginForm = document.getElementById("loginForm");
    if(loginForm){
        loginForm.addEventListener("submit", function(e){
            const email = this.querySelector("input[type='email]");
            if(!email.endsWith("gwu.edu")){
                alert("Profiles only for GWU students");
                e.preventDefault();
            }
        });
    }
    }
);