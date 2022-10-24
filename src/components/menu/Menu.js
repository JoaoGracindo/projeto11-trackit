import logo from "./../../assets/logo.svg";
import StyledMenu from "./StyledMenu";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "./../../contexts/auth";
import { Navigate, useNavigate } from "react-router-dom";

export default function Menu({}) {
  const navigate = useNavigate();
  const { user, isLogged } = useContext(AuthContext);
 

  
  
    if(!isLogged){
      alert("Voce não esta logado")
    return <Navigate to ="/"/>
    }


  return (
    <StyledMenu>
      
      <div className="header">
        <img className="logo" src={`${logo}`} />
        <img
          data-identifier="avatar"
          className="userImg"
          src={user.image}
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
