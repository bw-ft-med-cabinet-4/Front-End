import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import * as yup from 'yup';
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import Login from "../../components/auth/Login";
import NewAccount from '../../components/auth/NewAccount';

const register = 'https://medcabinetbackend.herokuapp.com/api/register'
const login = 'https://medcabinetbackend.herokuapp.com/api/login'

const initialLoginValues={
  username2: '',
  password2: '',
}


const initialLoginErrors={
  username2: '',
  password2: '',

}

const  loginSchema = yup.object().shape({  
  username2: yup
    .string()
    .min(3, 'username must have at least 3 characters!')
    .required('username is required!'),
  password2: yup
    .string()
    .min(3, 'password must have at least 3 characters!')
    .required('password is required!'),})

const AuthView = props => {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formDisabled, setFormDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  
  ///// new account page post




  ////////////////////////////////////////////////
  useEffect(() => {

    formSchema.isValid(formValues)
      .then(valid => {
        setFormDisabled(!valid)
      })
  }, [formValues])


  const onInputChange = evt => {

    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {

        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {

        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const isChecked = evt.target.isChecked

    setFormValues({
      ...formValues
    })
  }

  return (
    <Router>
      <div className="App">

        <Login 
        exact path="/login" 
        component={Login}
        values={formValues}
        onInputChange={onInputChange}
        onSubmitLogin={onSubmitLogin}
        disabled={formDisabled}
        errors={formErrors}
        />
        
        <NewAccount 
        exact path="/" 
        component={NewAccount}
        values ={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={formDisabled}
        errors={formErrors}
        />
      </div>
    </Router>
  );
}

