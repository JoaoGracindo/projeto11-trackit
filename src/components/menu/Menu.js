import logo from "./../../assets/logo.svg";
import styled from "styled-components";

export default function Menu({}) {
  return (
    <StyledMenu>
      <div className="header">
        <img className="logo" src={`${logo}`} />
        <img className="userImg" src="https://www.rbsdirect.com.br/imagesrc/25516126.jpg?w=700" />
      </div>
      <div className="footer"></div>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  img {
    height: 50px;
    width: 50px;
  }

  .footer {
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    background-color: #126ba5;
    width: 100%;
    height: 70px;
  }

  .header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items:center;
    top: 0;
    left: 0;
    background-color: #126ba5;
    width: 100%;
    height: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  .logo {
    height:48px;
    width:96px;
    margin-left:5%;

  }

  .userImg {
    width:50px;
    height:50px;
    border-radius:50%;
    margin-right:5%;

  }
`;
