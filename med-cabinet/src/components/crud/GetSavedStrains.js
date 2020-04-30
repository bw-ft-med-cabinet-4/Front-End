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

  const handleChange = (e) => {
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
      {console.log(strain)}
      {GetSavedStrains.map((strain, index) => {
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
