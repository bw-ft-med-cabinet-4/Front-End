import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import axios from "axios";
import * as yup from "yup";


const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'username must have at least 3 characters!')
    .required('username is required!'),
  password: yup
    .string()
    .min(3, 'password must have at least 3 characters!')
    .required('password is required!'),

})

function Login(props) {

  const initialFormValues={
    username: '',
    password: '',
  }
  const initialFormErrors = {
    username: '',
    password: '',
  }
  

  // const { values, onInputChange, onSubmitLogin, errors, disabled } = props;
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
const [formValues, setFormValues] = useState(initialFormValues)
const [formDisabled, setFormDisabled] = useState(true)
const [formErrors, setFormErrors] = useState(initialFormErrors)

useEffect(() => {

  formSchema.isValid(formValues)
    .then(valid => {
      setFormDisabled(!valid)
    })
}, [formValues])

  const onSubmit = e => {
    e.preventDefault();
    axios
        .post('https://medcabinetbackend.herokuapp.com/api/login', user)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            console.log('The data was not returned', err)
        })
  }


  const handleChanges = evt => {

    evt.preventDefault();
    const ename = evt.target.name
    const value =   evt.target.value
  
    setUser({
      ...user,
      [ename]: value,
    });
  
  
    yup
      .reach(formSchema, ename)
      .validate(value)
      .then(valid => {
  
        setFormErrors({
          ...formErrors,
          [ename]: '',
        })
      })
      .catch(err => {
  
        setFormErrors({
          ...formErrors,
          [ename]: err.errors[0]
        })
      })
  
    setFormValues({
      ...formValues,
      [ename]: value,
    })
  
  };

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const isChecked = evt.target.isChecked
  
    setFormValues({
      ...formValues
    })
  }


  return (
    <div>
      <div>
                {formErrors.username}<br></br>
                {formErrors.password}
            </div>
      
      <img src={logo} />
      <h1>Log In</h1>
      <label>
        Username:&nbsp;
        <input
          value={formValues.username}
          onChange={handleChanges}
          name="username"
          type="text"
        />
      </label>
      <label>
        Password:&nbsp;
        <input
          value={formValues.password}
          onChange={handleChanges}
          name="password"
          type="password"
        />
      </label>
      <button onClick={onSubmit} disabled={formDisabled}>
        Log In
      </button>
  const inputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          {/* {errors.username2} */}
          <br></br>
          {/* {errors.password2} */}
        </div>
        <img src={logo} />
        <h1>Log In</h1>
        <label>
          Username:&nbsp;
          <input
            value={user.username}
            onChange={inputChange}
            name="username"
            type="text"
          />
        </label>
        <label>
          Password:&nbsp;
          <input
            value={user.password}
            onChange={inputChange}
            name="password"
            type="password"
          />
        </label>
        <button type="submit">
          Log In
        </button>
      </form>

    </div>
  );
}

export default Login;
