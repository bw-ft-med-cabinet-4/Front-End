import React, { useState, useEffect } from "react";
import logo from "./images/logo.png";
import axios from "axios";


function NewAccount(props) {

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


    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,

    } = props

    return (
        <div>
            <div>
                {errors.username}<br></br>
                {errors.password}
            </div>
           <img src={logo} />
           <h1>New Account</h1>
           <label>Username:&nbsp;
               <input 
               value={values.username}
               onChange={onInputChange}
               name='username'
               type='text'
               />   
           </label>
           
               <label>Password:&nbsp;
               <input 
               value={values.password}
               onChange={onInputChange}
               name='password'
               type='password'
               />
               </label>
               
            <button onClick={onSubmit} disabled={disabled}>Create</button>
        </div>
    )
}

export default NewAccount;
