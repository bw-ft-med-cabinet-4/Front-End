// react
import React from 'react';
import './index.css';
// router
import { Route } from 'react-router-dom';
// styled components
import styled from 'styled-components';
// contexts
import StrainContext from './context/StrainContext';
// views
    import Dashboard from './views/home/Dashboard';
    import UserDashboard from './views/userDashboard/UserDashboard';
    import Crud from './views/crud/Crud';
// components 
    import MainNav from './components/menus/MainNav';
    // import OldLogin from './components/auth/OldLogin'
    import Login from './components/auth/Login';
    import NewAccount from "./components/auth/NewAccount"
    import ProtectedRoute from "./components/auth/ProtectedRoute"
    import StrainList from './components/auth/StrainList';

    // temp register component
    import Register from './components/auth/Register';


// component
const App = () => {
    return (
        <>
        <StrainContext.Provider value={'test'}>
            <Route path='/' component={MainNav} />
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/dashboard' component={UserDashboard} />
            <Route path='/newaccount' component={NewAccount} />
            <Route path="/login" component={Login} />

            {/* temp register component */}
            <Route path='/register' component={Register} />
            
            {/* Make protected route */}
            <Route path="/strains" component={StrainList} />
        </StrainContext.Provider>

        </>
    );
}

export default App;