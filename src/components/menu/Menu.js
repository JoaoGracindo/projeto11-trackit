import logo from "./../../assets/logo.svg";
import styled from "styled-components";
import StyledMenu from "./StyledMenu";

export default function Menu({}) {
  return (
    <StyledMenu>
      <div className="header">
        <img className="logo" src={`${logo}`} />
        <img
          className="userImg"
          src="https://www.rbsdirect.com.br/imagesrc/25516126.jpg?w=700"
        />
      </div>
      <div className="footer">
        <span>Hábitos</span>
        <div>Hoje</div>
        <span>Histórico</span>
      </div>
    </StyledMenu>
  );
}


