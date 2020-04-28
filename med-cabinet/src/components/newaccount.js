import React, { useState, useEffect } from "react";
import logo from "./images/logo.png"



function NewAccount(props) {

    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit
    } = props

    return (
        <div>
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
               type='text'
               />
               </label>
               
            <button onClick={onSubmit}>Create</button>
        </div>
    )
}

export default NewAccount;