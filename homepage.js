// pop up modal for creating an account
function opencreateaccount() {
    document.getElementById("createaccounthyperlink").style.display="block";
}
// closes once the form is submitted
function closecreateaccount() {
    document.getElementById("createaccounthyperlink").style.display="none";
}
// function for doing the login event, so it shows as successful
function Login(event) {
    event.preventDefault(); // prevent form from submitting
  
    const emailInput = document.querySelector('#loginEmail');
    const email = emailInput.value.trim();
    // make sure email ends with @gwu.edu, if it does then login is successful and shows pop up
    if (email.endsWith("@gwu.edu")) {
      document.getElementById("successlogin").style.display="block";
    } 
      // if wrong email then unsucessful
    else {
      document.getElementById("errorlogin").style.display="block";
    }
  }
// Closes the pop up for creating accrount
function closesuccess(){
    document.getElementById("successlogin").style.display="none";
}
// function for unsucessful login
function closeerror(){
    document.getElementById("errorlogin").style.display="none";
}

// once account is created show account created successfully
document.addEventListener("DOMContentLoaded", function(){
  const createaccount = document.getElementById("makeaccount");
  createForm.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Account created successfully");
    closecreateaccount();
  });
});
