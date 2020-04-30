import React, {useContext, useEffect, useState} from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import StrainContext  from '../../context/StrainContext';
import styled from 'styled-components';


export const StrainList = () => {
    const strains = useContext(StrainContext);
    const [strainList, setStrainList] = useState([]);

    const saveStrain = (id) => {
        axiosWithAuth()
            .post(`/strains/${id}`)
            .then(res => {
                (console.log(res))
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        axiosWithAuth()
            .get('/strains')
            .then(res => {
                setStrainList(res.data);
                console.log(res);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            {strainList.map((strain, index) => {
                return (
                    <Card key={index} className='cards'>
                        <p>{strain.type}</p>
                        <h4>{strain.strain}</h4>
                        <p>Effect: {strain.effect}</p>
                        <p>Flavor: {strain.flavor}</p>
                        <p>Description: {strain.description}</p>
                        <p>CBD: {strain.cbd}</p>
                        <p>THC: {strain.type}</p>
                        <p>Medical Effect: {strain.medical_effect}</p>
                        <button onClick={() => saveStrain(strain.id)}>Save</button>
                    </Card>
                )
            })}
        </Container>
    )
}


export default StrainList;

const Container = styled.div`
    background: #3F3D56;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-items: center;
    padding: 3.125rem 0;
`;

const Card = styled.div`
    width: 21.875rem;
    height: 29.375rem;
    background: #ffffff;
    border: 1px solid #D8D8D8;
    border-radius: 0.3125rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        font-size: 1rem;
        line-height: 1.125rem;
        color: #444444;
        font-weight: 400;
        text-transform: uppercase;
        margin-top: 1.875rem;
    }

    p {
        font-size: 1rem;
        color: #444444;
        font-weight: 300;
        margin-top: 1.875rem;
    }
`;