import React, { useEffect } from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import styled from "styled-components";
import { Login } from "./login/Login";
import axios from "axios";

const AppWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
`;

const request = async () => {
  const login = "loginTest";
  const password = "passwordTest";

  const formData = new FormData();
  formData.append("username", login);
  formData.append("password", password);

  const response1 = await axios.post("/login", formData, {
    headers: {"Content-Type": "multipart/form-data"}
  });
  console.log(response1);
  const response2 = await axios.get("/user/getAll");
  console.log(response2);
  const response3 = await axios.post("/logout");
  console.log(response3);
};
const App = () => {
  useEffect(() => {
    request();
  }, []);
  const contentJSX = !!AppWrapperDiv ? <Main/> : <Login/>;
  return (
    <AppWrapperDiv>
      <Header/>
      {contentJSX}
      <Footer/>
    </AppWrapperDiv>
  );
};

export default App;