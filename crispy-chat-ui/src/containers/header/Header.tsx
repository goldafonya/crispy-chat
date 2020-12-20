import React, { FC } from "react";
import { STYLE_SIZE } from "../../constants/STYLE_SIZE";
import { STYLE_COLOR } from "../../constants/STYLE_COLOR";
import Typography from "@material-ui/core/Typography/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    height: "64px",
    display: "flex",
    "justify-content": "center",
    "background-color": STYLE_COLOR.PRIMARY_COLOR,
  },
  header: {
    "max-width": STYLE_SIZE.MAX_CONTENT_WIDTH,
    display: "flex",
    "flex-grow": 1,
    "justify-content": "center",
  },
}));

export const Header: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Typography
          variant="h3"
          component="h3"
          style={{color: "white"}}
        >
          Chat
        </Typography>
      </div>
    </div>
  );
};