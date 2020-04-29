import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import axios from "axios";


function Login(props) {
  const { values, onInputChange, onSubmitLogin, errors, disabled } = props;
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onSubmit = e => {
    e.preventDefault();
    axios()
        .post('https://medcabinetbackend.herokuapp.com/api/login', user)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            console.log('The data was not returned', err)
        })
  }

  return (
    <div>
      <div>
        {errors.username2}
        <br></br>
        {errors.password2}
      </div>
      <img src={logo} />
      <h1>Log In</h1>
      <label>
        Username:&nbsp;
        <input
          value={values.username2}
          onChange={onInputChange}
          name="username2"
          type="text"
        />
      </label>
      <label>
        Password:&nbsp;
        <input
          value={values.password2}
          onChange={onInputChange}
          name="password2"
          type="password"
        />
      </label>
      <button onClick={onSubmitLogin} disabled={disabled}>
        Log In
      </button>
    </div>
  );
}

export default Login;
