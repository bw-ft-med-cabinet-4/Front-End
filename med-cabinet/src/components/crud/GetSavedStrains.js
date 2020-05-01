import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const GetSavedStrains = () => {
  const [strains, setStrains] = useState([]);
  const [reload, setReload] = useState(false);

  // effects
  useEffect(() => {
    axiosWithAuth()
    .get('/saved')
    .then(res => {
        console.log(res)
        setStrains(res.data);
    })
    .catch(e => console.error(e))
    setReload(false);
}, [reload])

  const deleteStrain = (id) => {
    axiosWithAuth()
      .delete(`/saved/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      {console.log(strains)}
      {!strains.length && <p className="no-results">You don't have any saved strains. Try saving one to view it here.</p>}
      {strains.map((strain, index) => {
        return (
          <Card className="cards" key={index}>
            <p>{strain.type}</p>
            <h4>{strain.strain}</h4>
            <p>Effect: {strain.effect}</p>
            <p>Flavor: {strain.flavor}</p>
            <p>Description: {strain.description}</p>
            <p>CBD: {strain.cbd}</p>
            <p>THC: {strain.type}</p>
            <p>Medical Effect: {strain.medical_effect}</p>
            <DeleteButton onClick={(e) => {
              e.preventDefault();
              deleteStrain(strain.id);
              setReload(true);
            }}>
              Delete
            </DeleteButton>
          </Card>
        );
      })}
    </Container>
  );
};

export default GetSavedStrains;

const Container = styled.div`
    background: #ffffff;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-items: center;
    padding: 3.125rem 0;

    p.no-results {
      width: 100%;
      font-size: 1rem;
      line-height: 1.4rem;
      color: #444444;
      font-weight: 300;
    }
`;

const Card = styled.div`
    width: 21.875rem;
    background: #3F3D56;
    border: 1px solid #D8D8D8;
    border-radius: 0.3125rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        font-size: 1rem;
        line-height: 1.125rem;
        color: #ffffff;
        font-weight: 400;
        text-transform: uppercase;
        margin-top: 1.875rem;
    }

    p {
        font-size: 1rem;
        color: #ffffff;
        font-weight: 300;
        margin-top: 1.875rem;
    }
`;

const DeleteButton = styled.button`
    margin: 3.125rem 0;
    width: 6.25rem;
    height: 3.125rem;
    border: none;
    border-radius: 0.3125rem;
    background: #6C63FF;
    color: #ffffff;
    font-size: 1rem;
    line-height: 1.2rem;

    &:hover {
        cursor: pointer;
    }
`;