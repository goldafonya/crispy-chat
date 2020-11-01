import React, { useEffect } from "react";
import { ChatApp } from "./ChatApp";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { THEME } from "../constants/THEME";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { GlobalActions } from "../actions/GlobalActions";
import { BottomNavigation } from "./bottomNavigation/BottomNavigation";
import { Router } from "@reach/router";


const useStyles = makeStyles(() => ({
  container: {
    "flex-grow": 1,
    display: "flex",
    "flex-direction": "column",
    padding: 0,
    height: "100vh",
    overflow: "hidden",
  },
  route: {
    flexGrow: 1,
    display: "flex",
    "flex-direction": "column",
    overflow: "hidden",
  },
}));

export const RootComponent = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(GlobalActions.init());
  }, [dispatch]);

  return (
    <ThemeProvider theme={THEME}>
      <Container maxWidth="sm" className={classes.container}>
        <Router className={classes.route}>
          <ChatApp path="/chat" default/>
        </Router>
        <BottomNavigation/>
      </Container>
    </ThemeProvider>
  );
};