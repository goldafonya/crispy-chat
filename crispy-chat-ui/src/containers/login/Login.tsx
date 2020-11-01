import React, { FC, useCallback, useState } from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Paper from "@material-ui/core/Paper/Paper";
import { STYLE_SIZE } from "../../constants/STYLE_SIZE";
import { STYLE_COLOR } from "../../constants/STYLE_COLOR";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import { useDispatch } from "react-redux";
import { GlobalActions } from "../../actions/GlobalActions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    "flex-grow": 1,
    width: "100%",
    "max-width": STYLE_SIZE.MAX_CONTENT_WIDTH,
    "background-color": STYLE_COLOR.DEFAULT_COLOR,
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "flex-direction": "column",
  },
  paper: {
    maxWidth: "420px",
    width: "100%",
    height: "300px",
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    flexGrow: 1,
    padding: "24px",
    boxSizing: "border-box",
    width: "100%",
  },
}));

export const Login: FC = () => {
  const classes = useStyles();
  const [login, setLogin] = useState("loginTest");
  const [password, setPassword] = useState("passwordTest");
  const dispatch = useDispatch();
  const auth = useCallback((login, password) => dispatch(GlobalActions.auth(login, password)), [dispatch]);

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="column"
          className={classes.grid}
          spacing={2}
        >
          <Grid item>
            <TextField
              id="login"
              label="Login"
              value={login}
              onChange={e => setLogin(e.currentTarget.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              type="password"
              id="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => auth(login, password)}
              size="large"
            >
              Войти
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};