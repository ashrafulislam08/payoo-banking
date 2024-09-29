const mobileNumber = document.getElementById("mobile-number");
const pinNumber = document.getElementById("pin-number");
const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (mobileNumber.value.length < 11 || mobileNumber.value === "") {
    alert("Number will be 11 digit");
  } else if (pinNumber.value.length < 4 || pinNumber.value === "") {
    alert("Pin is 4 digit number");
  } else {
    window.location.href = "home.html";
  }
});
