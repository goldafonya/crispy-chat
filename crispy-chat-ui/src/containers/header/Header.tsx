import React, { FC, Fragment, useCallback, useState } from "react";
import { STYLE_SIZE } from "../../constants/STYLE_SIZE";
import { STYLE_COLOR } from "../../constants/STYLE_COLOR";
import Typography from "@material-ui/core/Typography/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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
    "justify-content": "flex-start",
  },
}));

const list = [
  "Menu 1",
  "Menu 2",
  "Menu 3",
];

export const Header: FC = () => {
  const classes = useStyles();
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(list[0]);
  const toggleDrawer = useCallback(() => {
    setIsShowDrawer(val => !val);
  }, []);
  const selectItem = useCallback((value) => {
    toggleDrawer();
    setSelectedItem(value);
  }, [toggleDrawer]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <IconButton
          aria-label="menu"
          onClick={toggleDrawer}
          size={"medium"}
        >
          <MenuIcon style={{color: "white"}}/>
        </IconButton>
        <Typography
          variant="h3"
          component="h3"
          style={{color: "white"}}
        >
          {`Chat:${selectedItem}`}
        </Typography>
      </div>
      <Drawer
        anchor={"left"}
        open={isShowDrawer}
        onClose={toggleDrawer}
      >
        <List
          style={{minWidth: "140px"}}
        >
          {
            list.map((text, index, array) => (
              <Fragment key={index}>
                <ListItem button key={text} onClick={() => selectItem(text)}>
                  <ListItemText primary={text} style={{color: selectedItem === text ? "crimson" : ""}}/>
                </ListItem>
                {array.length - 1 !== index && <Divider light/>}
              </Fragment>
            ))}
        </List>
      </Drawer>
    </div>
  );
};