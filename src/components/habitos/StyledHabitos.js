import styled from "styled-components";

const StyledHabitos = styled.div`
  background-color: #e5e5e5;
  position: fixed;
  top: 70px;
  bottom: 70px;
  width: 100%;
  z-index: -1;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 22px;
    margin-bottom: 20px;
    margin-right: 5%;
    margin-left: 5%;

    span {
      font-weight: 400;
      font-size: 22.976px;
      line-height: 29px;
      color: #126ba5;
    }

    div {
      width: 40px;
      height: 35px;
      background-color: #52b6ff;
      border-radius: 4.63636px;
      color: #ffffff;
      font-size: 25px;
      font-weight:500;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .buttonContainer {
    position: absolute;
    right: 5%;
    bottom: 23px;
  }

  .novoHabito {
    width: 90%;
    height: 180px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 0 auto;
    position: relative;

    input {
      width: 90%;
      height: 45px;
      background-color: #ffffff;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      margin: 20px 5% 10px 5%;
    }
    input::placeholder {
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      padding-left: 10px;

      color: #dbdbdb;
    }

    .dias {
      display: flex;
      justify-content: left;
      margin-left: 5%;

      div {
        background-color: #ffffff;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
        color: #dbdbdb;
      }
    }

    .cancelar {
      border: none;
      background-color: #ffffff;
      color: #52b6ff;
      font-weight: 400;
      font-size: 15.976px;
      margin-right: 23px;
    }

    .salvar {
      width: 84px;
      height: 35px;
      background-color: #52b6ff;
      border-radius: 4.63636px;
      border: none;
      color: #ffffff;
    }
  }

  .aviso{
    margin: 30px auto 0 auto;
    width:90%;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;

  }
`;

export default StyledHabitos;
