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
           <label>Email:&nbsp;
               <input 
               value={values.email}
               onChange={onInputChange}
               name='email'
               type='text'
               />   
           </label>
           <label>Name:&nbsp;
               <input 
               value={values.name}
               onChange={onInputChange}
               name='name'
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
               <label>Password again:&nbsp;
               <input 
               value={values.password2}
               onChange={onInputChange}
               name='password2'
               type='text'
               />
               </label>
                <label><input
                checked={values.checkbox}
                onChange={onCheckboxChange}
                type="checkbox"
                name="terms"
                />I agree with terms
                </label>
            <button onClick={onSubmit}>Create</button>
        </div>
    )
}

export default NewAccount;