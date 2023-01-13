// login form validation
const form = document.getElementById("login-form");
form.addEventListener("submit", event => {
  event.preventDefault(); // prevent form submission

  // get form input
  const username = form.elements.username.value;
  const password = form.elements.password.value;

  // validate form input
  if (username === "" || password === "") {
    alert("Please enter a username and password.");
  } else {
    // form input is valid, send a request to the server to check credentials
    const request = new XMLHttpRequest();
    request.open("GET", "users.json");
    request.send();

    request.onload = () => {
        const credentials = JSON.parse(request.responseText);
        const user = credentials.users.find(user => user.username === username && user.password === password);
        if (user) {
          alert("Login successful!");
          window.location.href = "home.html";
        } else {
          alert("Invalid username or password.");
        }
    };
  }
});
