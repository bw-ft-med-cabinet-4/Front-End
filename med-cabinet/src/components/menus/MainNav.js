// react
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// router
import { Link } from 'react-router-dom'
// styled comps
import styled from 'styled-components';
// test context
import StrainContext from '../../context/StrainContext';
// logo import
import logo from '../images/logo.png'

// component
const MainNav = () => {
    // contexts
    const strains = useContext(StrainContext)
    console.log('[CHECKING CONTEXT]', strains)

    const history = useHistory();

    return (
        <>
            <Container>
                <Menu>
                    <Logo><img src={logo} /></Logo>

                    <ButtonList>
                        <Link to='/'><button>Home</button></Link>
                        <Link to='/dashboard'><button>Dashboard</button></Link>
                        {!!localStorage.getItem('token') && <Link to="/"><button onClick={(e) => {
                            e.preventDefault();
                            localStorage.clear();
                            history.push(`/login`);
                        }}>Logout</button></Link>}
                        {!localStorage.getItem('token') && <Link to="/login"><button>Login</button></Link>}
                        {!localStorage.getItem('token') && <Link to="/register"><button>Register</button></Link>}
                    </ButtonList>
                </Menu>
            </Container>
        </>
    )
}

// styled components
const Container = styled.div`
    // background-color: green;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 11.5625rem;
`

const Menu = styled.div`
    width: 100%;
    height: 4rem;
    max-width: 1400px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    width: 20rem;
    height: 100%;
    // background-color: red;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const ButtonList = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    // background-color: yellow;

        a {
            height: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            align-items: center;
            text-decoration: none;
        }

        button {
            width: 5rem;
            height: 100%;
            margin: 0 1rem;
            background-color: transparent;
            border: none;
        }

        button:hover {
            background-color: pink;
            transition: 0.25s;
            cursor: pointer;
        }
`

export default MainNav;