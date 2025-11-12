document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  console.log(confirmPassword);



  if(password == "" && confirmPassword == ""){
    alert("enter the password");
    return;
  }


  confirmPassword.addEventListener("input", function() {
    errorMessage.textContent = "";
    confirmPassword.style.border = "";
  });
  

  
  alert('Registration successful!');

});
