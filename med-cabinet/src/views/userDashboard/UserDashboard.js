import React from 'react';
import styled from 'styled-components';
import GetSavedStrains from '../../components/crud/GetSavedStrains';

const UserDashboard = () => {
    return (
        <>
            <Container>
                <h2>Your Saved Strains</h2>
                <GetSavedStrains />
            </Container>
        </>
    )
}

// styled
const Container = styled.div`
    width: 90%;
    max-width: 1400px;
    height: 50rem; // temp
    margin: 0 auto;

    h2 {
        font-size: 3rem;
        font-weight: 400;
        color: #444444;
    }
`

export default UserDashboard;