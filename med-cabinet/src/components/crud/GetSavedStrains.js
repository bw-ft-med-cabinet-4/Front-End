import React, { useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const GetSavedStrains = () => {
  const [strain, setStrain] = useState({
    userId: "",
    strainId: "",
  });

  const handleInput = (e) => {
    setStrain({
      ...strain,
      [e.target.name]: e.target.value,
    });
    console.log(strain);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .get("/saved", strain)
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
                onChange={handleInput}
            />
            <input
                type='text'
                name='strain_id'
                onChange={handleInput}
            />
            <button>View Saved Strains</button>
        </form>
      </>
  )
};

export default GetSavedStrains;
