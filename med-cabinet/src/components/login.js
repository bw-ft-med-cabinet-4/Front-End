import React, { useState, useEffect } from "react";
import logo from "./images/logo.png";

const initialFormValues = {
  email: "",
  password: "",
};

function Login() {
  return (
    <div>
      <form>
        <img src={logo} />
        <h1>Log In</h1>
        <label>
          Email:&nbsp;
          <input name="username" type="text" />
        </label>
        <label>
          Password:&nbsp;
          <input name="password" type="text" />
        </label>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
