import React from "react";
import "./styles.css";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Componentes/Header/Header"
import { Main } from "./Componentes/Main/Main";

export default function App() {



  return (
    <div>
      <GlobalStyle />
      <div className="tela-inteira">

        <Header />

        <Main />

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>

      </div>
    </div>
  );
}
