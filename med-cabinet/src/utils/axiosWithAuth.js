import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: `https://medcabinetbackend.herokuapp.com/api`,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
};