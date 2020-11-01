import React, { FC } from "react";
import { Header } from "../components/header/Header";
import { Chat } from "./chatBody/ChatBody";
import { Login } from "./login/Login";
import { useTypedSelector } from "../store/store";
import CircularProgress from "@material-ui/core/CircularProgress";
import { RouteComponentProps } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    "flex-direction": "column",
    "flex-grow": 1,
    "align-items": "center",
    "padding-bottom": "12px",
    overflow: "auto",
  },
}));

export const ChatApp: FC<RouteComponentProps> = () => {
  const auth = useTypedSelector((store) => store.global.auth);
  const classes = useStyles();
  let contentJSX = <CircularProgress/>;
  if (auth !== null) {
    contentJSX = auth ? <Chat/> : <Login/>;
  }
  return (
    <div className={classes.wrapper}>
      <Header/>
      {contentJSX}
    </div>
  );
};
