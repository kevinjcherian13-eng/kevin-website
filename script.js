function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const phone = document.getElementById("loginPhone").value;
  const error = document.getElementById("loginError");

  if (!email.endsWith("@gmail.com")) {
    error.innerText = "Only Gmail addresses allowed";
    return false;
  }

  if (phone.length < 10) {
    error.innerText = "Enter valid phone number";
    return false;
  }

  localStorage.setItem("loggedIn", "true");
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("mainSite").style.display = "block";
  return false;
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") === "true") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainSite").style.display = "block";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  location.reload();
}
