import React, { useState, useEffect } from "react";
import logo from "./images/logo.png";
import axios from "axios";

// const initialFormValues = {
//   email: "",
//   name: "",
//   password: "",
//   password2: "",
// };

// setting state
const [user, setUser] = useState({
  username: "",
  password: "",
});

// on submit
const onSubmit = (e) => {
  e.preventDefault();
  axios
    .post("https://medcabinetbackend.herokuapp.com/api/register", user)
    .then((res) => {
      setUser({
        ...user,
        username: "",
        password: "",
      });
      console.log(res);
    })
    .catch((err) => {
      console.log("The data was not returned", err);
    });
};

//on change handler
const handleChanges = e => {
  e.preventDefault();
  setUser({
    ...user,
    [e.target.name]: e.target.value,
  });
};



function NewAccount() {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <img src={logo} />
        <h1>New Account</h1>
        {/* <label>
          Email:&nbsp;
          <input 
            name="email" 
            type="text" 
          />
        </label> */}
        <label>
          Name:&nbsp;
          <input 
          name="username" 
          type="text" 
          />
        </label>
        <label>
          Password:&nbsp;
          <input 
          name="password" 
          type="text" 
          />
        </label>
        {/* <label>
          Password again:&nbsp;
          <input 
          name="password2" 
          type="text" 
          />
        </label> */}
        {/* <label>
          <input 
          type="checkbox" 
          name="terms" 
          />
          I agree with terms
        </label> */}
        <button>Create</button>
      </form>
    </div>
  );
}

export default NewAccount;
