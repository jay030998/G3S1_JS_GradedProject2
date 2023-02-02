const validUsernamePasswords = [
    {
      username: "jay",
      password: "123456",
    }
  ];

  const loginForm = document.getElementById("loginForm");
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");
  const passwordTag = document.getElementById("login-btn");
  
  
  usernameField.onfocus = error;
  passwordField.onfocus = error;
  
  function error() {
    passwordTag.innerText = "";
  }

  window.history.forward();
  function noBack() {
    alert(
         "Going back is restricted"
    );
    window.history.forward();
  }
  
  
  loginForm.onsubmit = function (event) {
    onLoginClick(event);
  };
  
  
  function onLoginClick(event) {
    event.preventDefault();
    const username = usernameField.value;
    const password = passwordField.value;
    const currentUser = validUsernamePasswords.find((userData) => {
      return userData.username === username;
    });
    if (!currentUser) {
      passwordTag.innerText = "User doesn't exist";
    } else if (currentUser.password === password) {
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("password", password);
      window.location.href = "Resume.html";
    } else {
      passwordTag.innerText = "Invalid Credentials";
    }
  }