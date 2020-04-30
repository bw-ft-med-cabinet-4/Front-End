import React from 'react'
import styled from 'styled-components'
import AddStrain from '../../components/crud/AddStrain';
import DeleteStrain from '../../components/crud/DeleteStrain';
import GetSavedStrains from '../../components/crud/GetSavedStrains';

const Crud = () => {
    return (
        <>
            <h1>Crud view</h1>
            <AddStrain />
            <DeleteStrain />
            <GetSavedStrains />
        </>
    )
}

export default Crud;