import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Register() {

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

    const register = (user) => {
        axios.post(`https://medcabinetbackend.herokuapp.com/api/register`, user)
            .then(res => {
                console.log(res);
                history.push(`/login`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                register(user);
            }}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={inputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={inputChange}
                />
                <button type="submit">Register</button>
                    </form>
        </div>
    )
}
