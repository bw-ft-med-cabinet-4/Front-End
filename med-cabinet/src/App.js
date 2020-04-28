import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import NewAccount from './components/NewAccount';
import StrainList from './components/StrainList';

const register = 'https://medcabinetbackend.herokuapp.com/api/register'
const login = 'https://medcabinetbackend.herokuapp.com/api/login'
const initialFormValues={
  username: '',
  password: '',
  username2: '',
  password2: '',
  
}

const initialFormErrors={
  username: '',
  password: '',
  
}

function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const [formDisabled, setFormDisabled]= useState(true)

  const [formErrors ,setFormErrors] = useState(initialFormErrors)
///// new account page post
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
      username: formValues.username,
      
      password: formValues.password,
      

    }
    postRegister(newUser)
    setFormValues(initialFormValues)

  }
///// login page post
const postLogin = user => {
  axios.post(login, user)
  .then(res => {
    setUsers([...users, res.data])
  })
  .catch(err => {
    console.log('error')
  })
}

const onSubmitLogin = evt => {
  evt.preventDefault()

  const user = {
    username: formValues.username2,
    
    password: formValues.password2,
    

  }
  postLogin(user)
  setFormValues(initialFormValues)

}


////////////////////////////////////////////////

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
        <ProtectedRoute path='/strainlist' component={StrainList}/>

        <Login 
        exact path="/" 
        component={Login}
        values={formValues}
        onInputChange={onInputChange}
        onSubmitLogin={onSubmitLogin}
        />
        <NewAccount 
        exact path="/" 
        component={NewAccount}
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
