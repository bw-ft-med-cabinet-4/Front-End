import React, { useState, useEffect } from "react";
import logo from "./images/logo.png"

const initialFormValues={
    email: '',
    name: '',
    password: '',
    password2: ''
}

function NewAccount() {
    return (
        <div>
           <img src={logo} />
           <h1>New Account</h1>
           <label>Email:&nbsp;
               <input 
               name='email'
               type='text'
               />   
           </label>
           <label>Name:&nbsp;
               <input 
               name='name'
               type='text'
               />
               </label>
               <label>Password:&nbsp;
               <input 
               name='password'
               type='text'
               />
               </label>
               <label>Password again:&nbsp;
               <input 
               name='password2'
               type='text'
               />
               </label>
                <label><input
                type="checkbox"
                name="terms"
                />I agree with terms
                </label>
            <button>Create</button>
        </div>
    )
}

export default NewAccount;