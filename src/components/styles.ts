import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 90px;
    font-style: normal;
    font-weight: 800;
    margin-bottom: 50px;
    text-shadow: 1px 1px 5px black;
    text-align: center;

    @media (max-width: 700px) {
        font-size: 60px;
        font-style: normal;
        font-weight: 800;
        margin-bottom: 50px;
        text-align: center;
    };
    @media (max-width: 400px) {
        font-size: 50px;
        font-style: normal;
        font-weight: 800;
        margin-bottom: 50px;
        text-align: center;
    };
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    min-height: 700px;
    justify-content: center;
`;