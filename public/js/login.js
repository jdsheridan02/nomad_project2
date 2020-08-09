$(document).ready(() => {
  console.log("login page js working")
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const emailInput = $("#email-input");
  const passwordInput = $("#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    console.log("form submitted")
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    console.log("made it to login user")
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        console.log("made it to 32")
        window.location.replace("/user");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
