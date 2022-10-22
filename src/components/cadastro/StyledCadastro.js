import styled from "styled-components";

const Conteiner = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  img {
    margin: auto;
    margin-top: 70px;
    width: 180px;
    height: 180px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    box-sizing: border-box;

    input {
      box-sizing: border-box;
      height: 45px;
      width: 300px;
      margin: 2.5px auto;
      background: #ffffff;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      padding-left: 12px;
      color: #dbdbdb;
    }
    input::placeholder {
      color: #dbdbdb;
    }

    button {
      box-sizing: border-box;
      height: 45px;
      width: 300px;
      margin: 10px auto;
      background-color: #52b6ff;
      border-radius: 4.63636px;
      border: none;
      font-weight: 400;
      font-size: 20.976px;
      line-height: 26px;
      text-align: center;

      color: #ffffff;
    }
  }

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    margin: 0 auto;
    color: #52b6ff;
  }

  .desabilitado{

    background-color: #F2F2F2;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
  }

`;

export default Conteiner;
