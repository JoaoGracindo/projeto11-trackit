import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Login from "./components/Login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import Hoje from "./components/hoje/Hoje";
import Habitos from "./components/habitos/Habitos";
import Historico from "./components/historico/Historico";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  
   *{ 
    font-family: 'Lexend Deca', sans-serif;
    margin: 0;
    padding: 0;
  }
  
`;

export default App;
