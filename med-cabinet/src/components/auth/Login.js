import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import axios from "axios";
import * as yup from "yup";
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import {useHistory} from "react-router-dom"


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
  const {push} = useHistory()
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
    axiosWithAuth()
        .post('login', user)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.token)
          push('/crud')
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
  
    })
  })

  
    </div>
  );
}

export default Login;
