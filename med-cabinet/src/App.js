// react
import React from 'react';
// router
import { Route } from 'react-router-dom';
// styled components
import styled from 'styled-components';
// contexts
import StrainContext from './context/StrainContext';
// views

    import Crud from './views/crud/Crud';
// components 
    import MainNav from './components/menus/MainNav';
    import Login from './components/auth/Login'
    import NewAccount from "./components/auth/NewAccount"
    

// component
const App = () => {
    return (
        <>
        <StrainContext.Provider value={'test'}>
            <Route path='/' component={MainNav} />
            <Route path='/newaccount' component={NewAccount} />
            <Route path='/crud' component={Crud} />
            <Route path='/login' component={Login}/>
        </StrainContext.Provider>

        </>
    );
}

export default App;