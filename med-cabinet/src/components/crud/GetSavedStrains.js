import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const GetSavedStrains = () => {
  const [strains, setStrains] = useState([]);

  // effects
  useEffect(() => {
    axiosWithAuth()
    .get('/saved')
    .then(res => {
        console.log(res)
    })
    .catch(e => console.error(e))
}, [])

  const handleInput = (e) => {
    setStrains({
      ...strains,
      [e.target.name]: e.target.value,
    });
    console.log(strains);
  };

  const viewSaved = (id) => {
    axiosWithAuth()
      .post(`/strains/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {console.log(strains)}
      {strains.map((strain, index) => {
        return (
          <div className="cards" key={index}>
            <p>{strain.id}</p>
            <p>{strain.id}</p>
            <p>Strain Name: {strain.strain}</p>
            <p>Effect: {strain.effect}</p>
            <p>Flavor: {strain.flavor}</p>
            <p>Description: {strain.description}</p>
            <button onClick={() => viewSaved(strain.id)}>
              View Saved Strains
            </button>
          </div>
        );
      })}
    </>
  );
};

export default GetSavedStrains;