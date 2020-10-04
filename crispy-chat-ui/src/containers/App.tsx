import React, { FC, useEffect } from "react";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import styled from "styled-components";
import { Login } from "./login/Login";
import { connect } from "react-redux";
import { IStore } from "../model/store/IStore";
import { Nullable } from "../model/utils/Nullable";
import { GlobalActions } from "../actions/GlobalActions";

const AppWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
`;

interface IAppProps {
  auth: Nullable<boolean>;
  init: () => void;
}

const App: FC<IAppProps> = ({auth, init}) => {
  useEffect(() => {
    init();
  }, [init]);
  if (auth === null) return null;
  const contentJSX = auth ? <Main/> : <Login/>;
  return (
    <AppWrapperDiv>
      <Header/>
      {contentJSX}
      <Footer/>
    </AppWrapperDiv>
  );
};

export default connect(
  (store: IStore) => ({
    auth: store.global.auth,
  }),
  {
    init: GlobalActions.init
  }
)(App);