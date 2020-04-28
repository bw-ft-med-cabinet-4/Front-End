import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/login"
import NewAccount from './components/newaccount'

const register = 'https://medcabinetbackend.herokuapp.com/api/register'
const login = 'https://medcabinetbackend.herokuapp.com/api/login'
const initialFormValues={
  email: '',
  name: '',
  password: '',
  password2: ''
}

const initialFormErrors={
  email: '',
  name: '',
  password: '',
  password2: ''
}

function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const [formDisabled, setFormDisabled]= useState(true)

  const [formErrors ,setFormErrors] = useState(initialFormErrors)

  const postRegister = user => {
    axios.post(register, user)
    .then(res => {
      setUsers([...users, res.data])
    })
    .catch(err => {
      console.log('error')
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      email: formValues.email,
      name: formValues.name,
      password: formValues.password,
      password2:formValues.password2

    }
    postRegister(newUser)
    setFormValues(initialFormValues)

  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt => {
    const {name} = evt.target
    const isChecked = evt.target.isChecked

    setFormValues({
      ...formValues
    })
  }

  return (
    <Router>
      <div className="App">
        <ProtectedRoute />

        <Login />
        <NewAccount 
        values ={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        />
      </div>
    </Router>
  );
}

export default App;
