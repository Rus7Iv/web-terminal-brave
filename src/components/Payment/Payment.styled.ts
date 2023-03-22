import styled from 'styled-components'

export const OperatorPayment = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(0, 0, 0);
    margin: 20px;
    width: 500px;
    max-width: 100%;
    min-width: 300px;
    background-color: rgb(255, 255, 255);
    height: 300px;
    font-size:x-large;
    font-weight:700;
    border-radius: 20px;
    margin-bottom: 1.5rem;
    border: 2px solid #7affff;
    box-shadow: 1px 1px 10px rgb(96, 92, 92);

    .input-box{
        font-family: 'Open Sans', sans-serif;
        font-weight:700;
        margin-top: 15px;
        margin-bottom: 20px;
        border-radius: 0.45rem;
        padding-left: 15px;
    };

    .go_back{
        width: 85%;
        margin-bottom: 0px;
        text-align: right;
        font-size: small;
    };
    .react-tel-input{
        text-shadow: 1px 1px 3px black;
    };    

    .special-label{
        text-align: center;
    };
    
    @media (max-width: 700px) {
        font-size: xx-large;
    };
    @media (max-width: 400px) {
        font-size: xx-large;
    };
`;