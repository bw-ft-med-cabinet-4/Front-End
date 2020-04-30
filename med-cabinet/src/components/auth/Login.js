import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

    const history = useHistory();

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const inputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const login = (user) => {
        axios.post(`https://medcabinetbackend.herokuapp.com/api/login`, user)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                history.push(`/`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                login(user);
            }}>
                <input onChange={inputChange} type="text" name="username" value={user.username} placeholder="Username" />
                <input onChange={inputChange} type="password" name="password" value={user.password} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
