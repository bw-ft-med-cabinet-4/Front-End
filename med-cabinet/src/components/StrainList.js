import React, {useContext} from 'react';
import {StrainContext} from '../context/StrainContext';
import axiosWithAuth from '../utils/axiosWithAuth';


export const StrainList = () => {
    const strains = useContext(StrainContext);

    const getData = () => {
        axiosWithAuth()
            .get('http://localhost:5000/api/strains')
            .then(res => {
                this.setState ({
                    StrainList: res.data
                })
            })
            .catch(err => console.log([err]));
    }

    return (
        <div>
            {console.log(strains)}
        </div>
    )
}


export default StrainList;