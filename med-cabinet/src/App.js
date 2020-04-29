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

// component
const App = () => {
    return (
        <>
        <StrainContext.Provider value={'test'}>
            <Route path='/' component={MainNav} />
            <Route path='/auth' component={AuthView} />
            <Route path='/crud' component={Crud} />
        </StrainContext.Provider>
        </>
    );
}

export default App;