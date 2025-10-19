$(document).ready(function(){

  if(localStorage.getItem("email")){
    $("#signupForm").hide()
    $("#loginForm").show()
  }
  else{
    $("#signupForm").show()
    $("#loginForm").hide()
  }

  $("#email").keyup(function(){
    let emailValue = $("#email").val()
    if(emailValue.includes("@") && emailValue.includes(".")){
      $("#emailIcon").removeClass("fa-times text-danger").addClass("fa-check text-success")
    }
    else{
      $("#emailIcon").removeClass("fa-check text-success").addClass("fa-times text-danger")
    }
  })

  $("#password").keyup(function(){
    let passwordValue = $("#password").val()
    if(passwordValue.length >= 8){
      $("#passwordIcon").removeClass("fa-times text-danger").addClass("fa-check text-success")
    }
    else{
      $("#passwordIcon").removeClass("fa-check text-success").addClass("fa-times text-danger")
    }
  })

  $("#loginEmail").keyup(function(){
    let loginEmailValue = $("#loginEmail").val()
    if(loginEmailValue.includes("@") && loginEmailValue.includes(".")){
      $("#loginEmailIcon").removeClass("fa-times text-danger").addClass("fa-check text-success")
    }
    else{
      $("#loginEmailIcon").removeClass("fa-check text-success").addClass("fa-times text-danger")
    }
  })

  $("#loginPassword").keyup(function(){
    let loginPasswordValue = $("#loginPassword").val()
    if(loginPasswordValue.length >= 8){
      $("#loginPasswordIcon").removeClass("fa-times text-danger").addClass("fa-check text-success")
    }
    else{
      $("#loginPasswordIcon").removeClass("fa-check text-success").addClass("fa-times text-danger")
    }
  })

  $("#signupBtn").click(function(){
    let userName = $("#uname").val()
    let email = $("#email").val()
    let password = $("#password").val()

    if(userName == "" || email == "" || password == ""){
      alert("Please fill all fields!")
      return
    }

    localStorage.setItem("uname", userName)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    alert("Signup successful! Now login.")
    $("#signupForm").hide()
    $("#loginForm").show()
    $("#uname,#email,#password").val("")
  })

  $("#loginBtn").click(function(){
    let loginEmail = $("#loginEmail").val()
    let loginPassword = $("#loginPassword").val()
    let storedEmail = localStorage.getItem("email")
    let storedPassword = localStorage.getItem("password")
    let storedName = localStorage.getItem("uname")

    if(loginEmail == storedEmail && loginPassword == storedPassword){
      alert("Welcome back, " + storedName + "!")
      $("#loginEmail,#loginPassword").val("")
    }
    else{
      alert("Invalid email or password!")
    }
  })

  $("#clearBtn").click(function(){
    localStorage.clear()
    alert("Storage cleared. Starting fresh!")
    $("#loginForm").hide()
    $("#signupForm").show()
  })
})
