import React, { FC, useEffect } from "react";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Main } from "./main/Main";
import styled from "styled-components";
import { Login } from "./login/Login";
import { useDispatch } from "react-redux";
import { GlobalActions } from "../actions/GlobalActions";
import { useTypedSelector } from "../store/store";

const AppWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
`;

export const App: FC = () => {
  const auth = useTypedSelector((store) => store.global.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GlobalActions.init());
  }, [GlobalActions.init]);
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
