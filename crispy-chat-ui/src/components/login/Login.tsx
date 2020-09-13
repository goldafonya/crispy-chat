import React, { FC, useState } from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Paper from "@material-ui/core/Paper/Paper";
import { STYLE_SIZE } from "../../constants/STYLE_SIZE";
import { STYLE_COLOR } from "../../constants/STYLE_COLOR";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";

const LoginWrapperDiv = styled.div`
    flex-grow: 1;
    width: 100%;
    max-width: ${STYLE_SIZE.MAX_CONTENT_WIDTH};
    background-color: ${STYLE_COLOR.DEFAULT_COLOR};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Login: FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginWrapperDiv>
      <Paper
        style={{
          width: "420px",
          height: "300px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Grid
          container
          direction="column"
          style={{
            flexGrow: 1,
            padding: "24px"
          }}
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
              onClick={() => console.log("onClick ", login, password)}
              size="large"
            >
              Войти
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </LoginWrapperDiv>
  );
};