import React, { useState } from "react";
import styled from "styled-components";
import {axiosWithAuth} from "../../utils/axiosWithAuth";

const DeleteStrain = () => {
  const [strain, setStrain] = useState({
    usersId: "",
    strainsId: "",
  });

  const handleInput = e => {
    setStrain({
      ...strain,
      [e.target.name]: e.target.value,
    });
    console.log(strain);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .delete("/saved/:id", strain)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("The data was not returned", err);
      });
  };

  return (
      <>
        <form onSubmit={handleSubmit}>
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
            <button>Delete</button>
        </form>
      </>
  )
};

export default DeleteStrain;
