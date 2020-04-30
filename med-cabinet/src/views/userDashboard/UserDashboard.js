import React from 'react';
import styled from 'styled-components';
import GetSavedStrains from '../../components/crud/GetSavedStrains';

const UserDashboard = () => {
    return (
        <>
            <Container>
                user dash view
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
    background-color: green;
`

export default UserDashboard;