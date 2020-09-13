import React from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import styled from "styled-components";
import { Login } from "./login/Login";

const AppWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
`;

const App = () => {
  const contentJSX = !!AppWrapperDiv ? <Main /> : <Login />;
  return (
    <AppWrapperDiv>
      <Header />
      {contentJSX}
      <Footer />
    </AppWrapperDiv>
  );
};

export default App;