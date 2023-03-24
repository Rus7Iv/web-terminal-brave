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
    font-size: 25px;
    font-weight: 700;
    border-radius: 20px;
    margin-bottom: 20px;
    border: 2px solid #7affff;
    box-shadow: 1px 1px 10px rgb(96, 92, 92);
    box-sizing: border-box;
    padding: 50px;

    .input-box{
        font-weight: 700;
        margin-top: 15px;
        margin-bottom: 10px;
        border-radius: 10px;
        padding-left: 15px;
        display: block;
    };

    .go_back{
        width: 100%;
        margin-bottom: 0px;
        text-align: right;
        font-size: 15px;
    };
    .react-tel-input{
        text-shadow: 1px 1px 3px black;
        display: block;
    };   
    .pay{
        margin: 10px;
    };
    
    @media (max-width: 700px) {
        font-size: 25px;
    };
    @media (max-width: 400px) {
        font-size: 25px;
    };
`;