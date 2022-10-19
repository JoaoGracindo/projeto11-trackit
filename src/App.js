import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Login />
        <Routes>
          {/* <Route path="/"  element={}/>
      <Route path="/cadastro" element={} />
      <Route path="/habitos" element={} />
      <Route path="/hoje" element={} />
      <Route path="/historico" element={} /> */}
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
