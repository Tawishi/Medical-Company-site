import React, { useState } from 'react';
import LoginForm from './LoginForm';

function Login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "123#456"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in!")
      setUser({
        name: details.name,
        email: details.email
      });
      setCookie("email", details.email);
      setCookie("password", details.password);
    } else {
      console.log("Details do not match!")
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  }

  /** COOKIE STORAGE **/
  // set cookie value
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    console.log(exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  return (
    <div className="Login">
      {(user.email !== "") ? (
        // redirect to shopping cart

        <div className="welcome">
          <h2>Welcome {user.name}!</h2>
          <button onClick={Logout}>Logout</button>
          {/*logged in and ready to fill the cart*/}

        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;
