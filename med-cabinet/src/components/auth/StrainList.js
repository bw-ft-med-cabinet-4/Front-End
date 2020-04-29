import React, {useContext, useEffect} from 'react';
import {StrainContext} from '../../context/StrainContext';
import axiosWithAuth from '../../utils/axiosWithAuth';


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
                        <p>{strain.id}</p>
                        <p>Strain Name: {strain.name}</p>
                        <p>Effect: {strain.effect}</p>
                        <p>Flavor: {strain.flavor}</p>
                        <p>Description: {strain.description}</p>
                        <p>Recommendation: {strain.recommendation}</p>
                    </div>
                )
            })}
        </div>
    )
}


export default StrainList;