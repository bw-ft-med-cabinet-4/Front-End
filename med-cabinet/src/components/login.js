import React, { useState, useEffect } from "react";
import logo from "./images/logo.png";
import axios from 'axios';

const initialFormValues = {
  email: "",
  password: "",
};

function Login(props) {

    const{
        values,
        onInputChange,
        onSubmitLogin
    }= props
    return (
        <div>
           
           <img src={logo} />
           <h1>Log In</h1>
           <label>Username:&nbsp;
               <input 
               value={values.username2}
               onChange={onInputChange}
               name='username2'
               type='text'
               />   
           </label>
           <label>Password:&nbsp;
               <input 
               value={values.password2}
               onChange={onInputChange}
               name='password2'
               type='text'
               />
               </label>
            <button onClick={onSubmitLogin}>Log In</button>
        </div>
    )
}

export default Login;
