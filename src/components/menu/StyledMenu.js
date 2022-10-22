import styled from "styled-components";

const StyledMenu = styled.div`

  img {
    height: 50px;
    width: 50px;
  }

  .footer {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    width: 100%;
    height: 70px;
    color: #52b6ff;

    div {
      width: 91px;
      height: 91px;
      color: #ffffff;
      background-color: #52b6ff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10%;
      font-weight: 400;
      font-size: 17.976px;
      line-height: 22px;
    }
  }

  .header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    background-color: #126ba5;
    width: 100%;
    height: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  .logo {
    height: 48px;
    width: 96px;
    margin-left: 5%;
  }

  .userImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 5%;
  }

  span {
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin: 0 10%;
  }
`;

export default StyledMenu;