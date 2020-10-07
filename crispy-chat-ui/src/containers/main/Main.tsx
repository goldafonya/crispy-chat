import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { STYLE_COLOR } from "../../constants/STYLE_COLOR";
import { STYLE_SIZE } from "../../constants/STYLE_SIZE";
import { IStore } from "../../model/store/IStore";
import TextField from "@material-ui/core/TextField";
import Circular from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { ChatStatus } from "../../model/ChatStatus";
import { ChatActions } from "../../actions/ChatActions";
import SockJS from "sockjs-client";
import Stomp, { Client } from "stompjs";


const MainWrapperDiv = styled.main`
    flex-grow: 1;
    width: 100%;
    max-width: ${STYLE_SIZE.MAX_CONTENT_WIDTH};
    background-color: ${STYLE_COLOR.DEFAULT_COLOR};
    display: flex;
    flex-direction: column;
`;

let socket;
let stompClient: Client;

socket = new SockJS("/api/chat");
stompClient = Stomp.over(socket);
stompClient.connect({}, function (frame) {
  console.log("Connected: " + frame);
  stompClient.subscribe("/topic/messages", function (messageOutput) {
    console.log("/topic/messages", JSON.parse(messageOutput.body));
  });
});

const send = () => {
  stompClient.send("/app/chat", {},
    JSON.stringify({"from": "from", "text": "text"}));
};

export const Main: FC<{}> = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const messages = useSelector((store: IStore) => store.chat.messages);
  const status = useSelector((store: IStore) => store.chat.status);

  const onChange = useCallback((e) => setValue(e.target.value), []);
  const onSend = useCallback(() => {
    send();
    if (!value) return;
    dispatch(ChatActions.sendMsg(value));
    setValue("");
  }, [value, dispatch]);

  useEffect(() => {
    if (status === ChatStatus.NULL) dispatch(ChatActions.connection());
  }, [status, dispatch]);

  if ([ChatStatus.NULL, ChatStatus.CONNECTION].includes(status)) {
    return (
      <MainWrapperDiv>
        <Circular/>
      </MainWrapperDiv>
    );
  }

  return (
    <MainWrapperDiv>
      <div style={{flexGrow: 1}}>
        <ul>
          {messages.map((m, i) => <li key={i}>{m.text}</li>)}
        </ul>
      </div>
      <div>
        <TextField
          id="input-text"
          value={value}
          onChange={onChange}
          fullWidth

        />
        <Button
          onClick={onSend}
          fullWidth
        >
          Отправить
        </Button>
      </div>
    </MainWrapperDiv>
  );
};