import styled from 'styled-components'

export const Cards = styled.div`
    align-items: center;
    width: 93%;
    display: inline-flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;

    img{
      width: 100%;  
    };
    .items{
      justify-content: center;
      list-style-type: none;
      border-radius: 10px;
      border: 2px solid #7affff;
      overflow: hidden;
      max-width: 200px; 
      margin: 20px;
      box-shadow: 1px 1px 10px rgb(96, 92, 92);
      background-color: white;
      cursor: pointer;
    };

    @media (max-width: 700px) {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;

        .item{
          width: 100%;
          max-width: 200px;
          max-height: 200px;
          min-width: 100px;
          margin-left: 0;
        }
    }; 

    @media (max-width: 400px) {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;

        .item{
          width: 100%;
          max-width: 200px;
          max-height: 200px;
          min-width: 100px;
          margin-left: 0;
        }
    };
`;
