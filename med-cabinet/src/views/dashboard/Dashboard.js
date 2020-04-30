import React from 'react';
import styled from 'styled-components';
import StrainList from '../../components/auth/StrainList';

const Dashboard = () => {
    return (
        <>
            <Container>
                <h1>Medcabinet Strains</h1>

                <StrainList />
            </Container>
        </>
    )
}

// styled comps
const Container = styled.div`
    background-color: green;
    width: 90%;
    height: 50rem; // temp
    max-width: 1400px;
    margin: 0 auto;
`

export default Dashboard;