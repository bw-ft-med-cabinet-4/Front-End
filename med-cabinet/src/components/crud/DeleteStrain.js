import React, {useState} from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../../utils/axiosWithAuth';

const DeleteStrain = () => {
    const [strain, setStrain] = useState({
        usersId: '',
        strainsId: ''
    })
}

const handleInput = e => {
    setStrain({
        ...strain,
        [e.target.name]: e.target.value
    })
    console.log(strain)
}

const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth
}