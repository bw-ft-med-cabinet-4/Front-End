import React, {useState} from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const AddStrain = () => {
    // hooks
    // const [strain, setStrain] = useState({
    //     usersId: '',
    //     strainsId: ''
    // })

    // handlers
    // const handleInput = e => {
    //     setStrain({
    //         ...strain,
    //         [e.target.name] : e.target.value
    //     })
    //     console.log(strain)
    // }

    // const handleSubmit = e => {
    //     e.preventDefault()

    //     axiosWithAuth.post('/strains', strain)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(e => console.error(e))
    // }
    
    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='user_id'
                    placeholder='user id'
                    onChange={handleInput}
                    />

                <input 
                    type='text'
                    name='strain_id'
                    placeholder='strain id'
                    onChange={handleInput}
                />

                <button>submit</button>
            </form> */}
        </>
    )
}

export default AddStrain;