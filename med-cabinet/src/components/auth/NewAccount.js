import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import axios from "axios";

// refactor to es6
const NewAccount = props => {
const [user, setUser] = useState({
  username: "",
  password: "",
});

const onSubmit = (e) => {
  e.preventDefault();
  axios()
    .post("https://medcabinetbackend.herokuapp.com/api/register", user)
    .then((res) => {
      setUser({
        ...user,
      [e.target.name]:[e.target.value]
      });
      console.log(res);
      localStorage.setItem('token', res.data.token)
    })
    .catch((err) => {
      console.log("The data was not returned", err);
    });
};

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
        // onSubmit,
        disabled,
        errors,

    } = props

    return (
        <div>
            {/* <div>
                {errors.username}<br></br>
                {errors.password}
            </div> */}
           {/* <img src={logo} />
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
               
            <button onClick={onSubmit} disabled={disabled}>Create</button> */}
        </div>
    )
}

export default NewAccount;
