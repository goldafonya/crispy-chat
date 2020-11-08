import React, { useEffect } from "react";
import { ChatApp } from "./ChatApp";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { THEME } from "../constants/THEME";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { GlobalActions } from "../actions/GlobalActions";
import { BottomNavigation } from "./bottomNavigation/BottomNavigation";
import { Router } from "@reach/router";
import { Login } from "./login/Login";
import { useTypedSelector } from "../store/store";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles(() => ({
  container: {
    "flex-grow": 1,
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    padding: 0,
    height: "100vh",
    overflow: "hidden",
  },
  route: {
    flexGrow: 1,
    display: "flex",
    "flex-direction": "column",
    overflow: "hidden",
    width: "100%",
  },
}));

export const RootComponent = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const auth = useTypedSelector((store) => store.global.auth);
  let contentJSX = <CircularProgress size={80}/>;

  useEffect(() => {
    dispatch(GlobalActions.init());
  }, [dispatch]);

  if (auth !== null) {
    contentJSX = auth ? (
      <>
        <Router className={classes.route}>
          <ChatApp path="/chat" default/>
        </Router>
        <BottomNavigation/>
      </>
    ) : <Login/>;
  }

  return (
    <ThemeProvider theme={THEME}>
      <Container maxWidth="sm" className={classes.container}>
        {contentJSX}
      </Container>
    </ThemeProvider>
  );
};