import React, {useContext, useEffect, useState} from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import StrainContext  from '../../context/StrainContext';


export const StrainList = () => {
    const strains = useContext(StrainContext);
    const [strainList, setStrainList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/strains')
            .then(res => {
                console.log('made it here');
                console.log(res);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {console.log(strains)}
            {strains.map((strain, index) => {
                return (
                    <div key={index} class='cards'>
                        <p>{strain.id}</p>
                        <p>Strain Name: {strain.id.name}</p>
                        <p>Effect: {strain.id.effect}</p>
                        <p>Flavor: {strain.id.flavor}</p>
                        <p>Description: {strain.id.description}</p>
                        <p>Recommendation: {strain.id.recommendation}</p>
                    </div>
                )
            })}
        </div>
    )
}


export default StrainList;