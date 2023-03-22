import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 7vw;
    font-style: normal;
    font-weight: 800;
    margin-bottom: 5vh;
    text-shadow: 1px 1px 5px black;

    @media (max-width: 700px) {
        font-size: 10vw;
        font-style: normal;
        font-weight: 800;
        margin-bottom: 5vh;
        text-align: center;
    };
    @media (max-width: 400px) {
        font-size: 13vw;
        font-style: normal;
        font-weight: 800;
        margin-bottom: 5vh;
        text-align: center;
    };
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 6rem;
    min-height: 100vh;
`;