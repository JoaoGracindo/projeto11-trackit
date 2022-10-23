import logo from "./../../assets/logo.svg";
import StyledMenu from "./StyledMenu";
import React, { useContext } from "react";
import { AuthContext } from "./../../contexts/auth";
import { useNavigate } from "react-router-dom";

export default function Menu({}) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  if (user.token === undefined) {
    navigate("/");
  }
  console.log(user.token)

  return (
    <StyledMenu>
      <div className="header">
        <img className="logo" src={`${logo}`} />
        <img
          data-identifier="avatar"
          className="userImg"
          src="https://www.rbsdirect.com.br/imagesrc/25516126.jpg?w=700"
        />
      </div>
      <div className="footer">
        <span data-identifier="habit-page-action">Hábitos</span>
        <div>Hoje</div>
        <span data-identifier="historic-page-action">Histórico</span>
      </div>
    </StyledMenu>
  );
}
