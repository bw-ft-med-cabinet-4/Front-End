import React from 'react'
import styled from 'styled-components'
import AddStrain from '../../components/crud/AddStrain';

const Crud = () => {
    return (
        <>
            <h1>Crud view</h1>

            <AddStrain />
            {/* <DeleteStrain /> */}
        </>
    )
}

export default Crud;