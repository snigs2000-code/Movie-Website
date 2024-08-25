//show/hide password onclick of button
// Show/hide password onClick of button using Javascript only

// https://stackoverflow.com/questions/31224651/show-hide-password-onclick-of-button-using-javascript-only
function show() {
  var p = document.getElementById("pwd");
  p.setAttribute("type", "text");
}

function hide() {
  var p = document.getElementById("pwd");
  p.setAttribute("type", "password");
}

var pwShown = 0;

document.getElementById("eye").addEventListener(
  "click",
  function () {
    if (pwShown == 0) {
      pwShown = 1;
      show();
    } else {
      pwShown = 0;
      hide();
    }
  },
  false
);
// Add an event listener to the login button

function toggleForm() {
  var loginForm = document.getElementById("loginForm");
  var signUpForm = document.getElementById("signUpForm");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    signUpForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    signUpForm.style.display = "block";
  }
}
function redirectToIndex() {
  window.location.href = "index.html"; // Replace "index.html" with your desired URL
}
