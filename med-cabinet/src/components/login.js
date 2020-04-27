import React, { useState, useEffect } from "react";
import logo from "./images/logo.png"

const initialFormValues={
    email:'',
    password: '',
}

function Login() {
    return (
        <div>
           
           <img src={logo} />
           <h1>Log In</h1>
           <label>Email:&nbsp;
               <input 
               name='email'
               type='text'
               />   
           </label>
           <label>Password:&nbsp;
               <input 
               name='password'
               type='text'
               />
               </label>
            <button>Log In</button>
        </div>
    )
}

export default Login;