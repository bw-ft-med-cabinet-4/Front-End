import React, {useContext, useEffect, useState} from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import StrainContext  from '../../context/StrainContext';


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
        <div>
            {console.log(strains)}
            {strainList.map((strain, index) => {
                return (
                    <div key={index} className='cards'>
                        <p>{strain.id}</p>
                        <p>Strain Name: {strain.strain}</p>
                        <p>Effect: {strain.effect}</p>
                        <p>Flavor: {strain.flavor}</p>
                        <p>Description: {strain.description}</p>
                        {/* <p>Recommendation: {strain.id.recommendation}</p> */}
                        <button onClick={() => saveStrain(strain.id)}>Save</button>
                    </div>
                )
            })}
        </div>
    )
}


export default StrainList;