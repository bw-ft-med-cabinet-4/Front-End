import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';

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
        <PageContainer>
            <form onSubmit={(e) => {
                e.preventDefault();
                register(user);
            }}>
                <h1>Register</h1>
                <div>
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
                </div>
                <button type="submit">Register</button>
                <Link to='/login'>Forgot password?</Link>
                <Link to='/register'>Create an account</Link>
                    </form>
        </PageContainer>
    )
}

// styled components
const PageContainer = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

        h1 {
            font-size: 3rem;
            margin: 2rem 0;
            font-weight: bold;
            color: #444;
        }

        form {
            width: 40%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;


                div {
                    width: 100%;
                    margin: 2rem 0;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    align-items: center;
                }

                input {
                    width: 45%;
                    height: 2rem;
                    border-radius: 3px;
                    border: 1px solid lightgray;
                    box-shadow: none;
                    padding-left: 0.3125rem;
                }

                button {
                    width: 100%;
                    height: 2.4rem;
                    background-color: #6C63FF;
                    border-radius: 3px;
                    color: #FFF;
                    margin-bottom: 1rem;
                }

                a {
                    margin: 0.5rem 0;
                }
        }
`