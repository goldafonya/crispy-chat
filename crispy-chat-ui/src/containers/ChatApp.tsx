import React, { FC } from "react";
import { Header } from "./header/Header";
import { Chat } from "./chatBody/ChatBody";
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
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header/>
      <Chat/>
    </div>
  );
};
