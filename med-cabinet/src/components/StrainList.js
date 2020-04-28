import React, {useContext, useEffect} from 'react';
import {StrainContext} from '../context/StrainContext';
import axiosWithAuth from '../utils/axiosWithAuth';


export const StrainList = () => {
    const strains = useContext(StrainContext);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/strains')
            .then(res => {
                this.setState ({
                    StrainList: res.data
                })
            })
            .catch(err => console.log([err]));
    }, []);

    return (
        <div>
            {console.log(strains)}
            {strains.map((strain, index) => {
                return (
                    <div key={index} class='cards'>
                        <p>Strain Name: {strain.name}</p>
                        <p>Strain Effect: {strain.effect}</p>
                        <p>Strain Flavor: {strain.flavor}</p>
                        <p>Strain Description: {strain.description}</p>
                        <p>Strain Recommendation: {strain.recommendation}</p>
                    </div>
                )
            })}
        </div>
    )
}


export default StrainList;