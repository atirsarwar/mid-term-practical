$(document).ready(function () {

  if (localStorage.getItem("email")) {
    $("#signupForm").hide()
    $("#loginForm").show()
  } 
  
  else {
    $("#signupForm").show()
    $("#loginForm").hide()
  }

  $("#email").on("input", function () {
    let val = $(this).val()
    let icon = $("#emailIcon")
    if (val.includes("@") && val.includes(".")) {
      icon.removeClass("fa-times text-danger").addClass("fa-check text-success")
    } 
    
    else {
      icon.removeClass("fa-check text-success").addClass("fa-times text-danger")
    }
  })

  $("#password").on("input", function () {
    let val = $(this).val()
    let icon = $("#passwordIcon")
    if (val.length >= 8) {
      icon.removeClass("fa-times text-danger").addClass("fa-check text-success")
    } 
    
    else {
      icon.removeClass("fa-check text-success").addClass("fa-times text-danger")
    }
  })


  $("#signupBtn").click(function () {
    let uname = $("#uname").val()
    let email = $("#email").val()
    let password = $("#password").val()

    if (uname === "" || email === "" || password === "") {
      alert("Please fill all fields!")
      return
    }

    localStorage.setItem("uname", uname)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    alert("Signup successful! Now login.")
    $("#signupForm").hide()
    $("#loginForm").show()

    $("#uname, #email, #password").val("")
  })

  $("#loginEmail").on("input", function () {
    let val = $(this).val()
    let icon = $("#loginEmailIcon")
    if (val.includes("@") && val.includes(".")) {
      icon.removeClass("fa-times text-danger").addClass("fa-check text-success")
    } 
    
    else {
      icon.removeClass("fa-check text-success").addClass("fa-times text-danger")
    }
  })

  $("#loginPassword").on("input", function () {
    let val = $(this).val()
    let icon = $("#loginPasswordIcon")
    if (val.length >= 8) {
      icon.removeClass("fa-times text-danger").addClass("fa-check text-success")
    } 
    else {
      icon.removeClass("fa-check text-success").addClass("fa-times text-danger")
    }
  })

  $("#loginBtn").click(function () {
    let email = $("#loginEmail").val()
    let pass = $("#loginPassword").val()

    let storedEmail = localStorage.getItem("email")
    let storedPass = localStorage.getItem("password")
    let storedName = localStorage.getItem("uname")

    if (email === storedEmail && pass === storedPass) {
      alert("Welcome back, " + storedName + "!")
      $("#loginEmail, #loginPassword").val("")
    } 
    
    else {
      alert("Invalid email or password!")
    }
  })

  $("#clearBtn").click(function () {
    localStorage.clear()
    alert("Storage cleared. Starting fresh!")
    $("#loginForm").hide()
    $("#signupForm").show()
  })
})
