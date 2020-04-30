import React from 'react';
import styled from 'styled-components';
import StrainList from '../../components/auth/StrainList';

// assets
import Medical from '../../assets/Medical.svg';

const Dashboard = () => {
    return (
        <>
            <Container>
                <Hero>
                    <div className="hero-left">
                        <h2>We Help People Feel Better</h2>
                        <p>Pellentesque venenatis arcu ante, ac rhoncus odio venenatis vitae. Praesent a mattis massa. In quis ligula neque. Suspendisse accumsan tempor risus. Phasellus orci lorem, suscipit quis sem eu, tincidunt imperdiet justo. Quisque fermentum, ligula vel tempus vehicula, enim velit cursus ligula, quis mattis orci felis id ligula.</p>
                        {!localStorage.getItem('token') && <CTAButton>Register Now</CTAButton>}
                        {localStorage.getItem('token') && <CTAButton>View Your Strains</CTAButton>}
                    </div>

                    <div className="hero-right">
                        <img src={Medical} alt="Medical Workers" />
                    </div>
                </Hero>
            </Container>

            <StrainList />
        </>
    )
}

// styled comps
const Container = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto 12.5rem;
`

const Hero = styled.div`
    width: 100%;
    display: flex;

    .hero-left {
        font-family: 'Muli', sans-serif;
        width: 50%;
        display: flex;
        flex-direction: column;

        h2 {
            font-size: 3.75rem;
            line-height: 4.5rem;
            color: #444444;
            font-weight: 900;
            margin-bottom: 2.625rem;
        }

        p {
            font-size: 1rem;
            line-height: 1.375rem;
            color: #8F8F8F;
        }
    }

    .hero-right {
        width: 50%;

        img {
            width: 100%;
            object-fit: contain;
        }
    }
`;

const CTAButton = styled.button`
    width: 33.75rem;
    height: 3.75rem;
    background: #6C63FF;
    font-size: 1rem;
    line-height: 1.375rem;
    color: #ffffff;
    font-weight: 400;
    border: none;
    border-radius: 0.3125rem;
    text-transform: uppercase;
    margin-top: 3.125rem;

    &:hover {
        cursor: pointer;
    }
`;

export default Dashboard;