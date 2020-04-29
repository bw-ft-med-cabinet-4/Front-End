import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import axios from "axios";


function Login(props) {
  // const { values, onInputChange, onSubmitLogin, errors, disabled } = props;
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onSubmit = e => {
    e.preventDefault();
    axios
        .post('https://medcabinetbackend.herokuapp.com/api/login', user)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            console.log('The data was not returned', err)
        })
  }

  const inputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          {/* {errors.username2} */}
          <br></br>
          {/* {errors.password2} */}
        </div>
        <img src={logo} />
        <h1>Log In</h1>
        <label>
          Username:&nbsp;
          <input
            value={user.username}
            onChange={inputChange}
            name="username"
            type="text"
          />
        </label>
        <label>
          Password:&nbsp;
          <input
            value={user.password}
            onChange={inputChange}
            name="password"
            type="password"
          />
        </label>
        <button type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
