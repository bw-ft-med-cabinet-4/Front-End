// react
import React from 'react';
// router
import { Route } from 'react-router-dom';
// styled components
import styled from 'styled-components';
// contexts
import StrainContext from './context/StrainContext';
// views
    import AuthView from './views/auth/Auth';
    import Crud from './views/crud/Crud';
// components 
    import MainNav from './components/menus/MainNav';
    import Login from './components/auth/Login';
    import Register from './components/auth/NewAccount';
import StrainList from './components/auth/StrainList';

// component
const App = () => {
    return (
        <>
        <StrainContext.Provider value={'test'}>
            <Route path='/' component={MainNav} />
            <Route path='/auth' component={AuthView} />
            <Route path='/crud' component={Crud} />
            <Route path="/login" component={Login} />
            <Route path='/register' component={Register} />
            {/* Make protected route */}
            <Route path="/strains" component={StrainList} />
        </StrainContext.Provider>
        </>
    );
}

export default App;