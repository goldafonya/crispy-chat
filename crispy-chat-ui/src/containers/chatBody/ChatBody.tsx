import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { STYLE_COLOR } from "../../constants/STYLE_COLOR";
import { STYLE_SIZE } from "../../constants/STYLE_SIZE";
import TextField from "@material-ui/core/TextField";
import Circular from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import { ChatStatus } from "../../model/ChatStatus";
import { ChatActions } from "../../actions/ChatActions";
import { useTypedSelector } from "../../store/store";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";

const useStyles = makeStyles(() => ({
  wrapper: {
    "flex-grow": 1,
    width: "100%",
    "max-width": STYLE_SIZE.MAX_CONTENT_WIDTH,
    "background-color": STYLE_COLOR.DEFAULT_COLOR,
    display: "flex",
    "flex-direction": "column",
    overflow: "auto",
  },
  loader: {
    margin: "0 auto",
  },
}));

const MessageItem: FC<{ text: string; isLast: boolean; }> = ({text, isLast}) => {

  return (
    <>
      <ListItem>
        <ListItemText primary={text} style={{wordBreak: "break-word"}}/>
      </ListItem>
      {isLast && <Divider light/>}
    </>
  );
};

export const ChatBody: FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const messages = useTypedSelector((store) => store.chat.messages);

  const onChange = useCallback((e) => setValue(e.target.value), []);
  const onSend = useCallback(() => {
    if (!value) return;
    dispatch(ChatActions.sendMsg(value));
    setValue("");
  }, [value, dispatch]);

  useEffect(() => {
    if (ref.current) ref.current.scroll(0, ref.current.clientHeight);
  }, [ref]);

  return (
    <div className={classes.wrapper} ref={ref}>
      <div style={{flexGrow: 1}}>
        <List>
          {messages.map((m, i, array) => (
            <MessageItem
              text={`${m.time} ${m.author}: ${m.message}`}
              key={m.id}
              isLast={array.length - 1 !== i}
            />
          ))}
        </List>
      </div>
      <div
        style={{
          display: "flex",
          padding: "0 14px",
        }}
      >
        <TextField
          id="message-text"
          value={value}
          onChange={onChange}
          rowsMax={4}
          fullWidth
          multiline
          style={{
            justifyContent: "flex-end",
          }}

        />
        <IconButton
          aria-label="send"
          onClick={onSend}
          size="medium"
        >
          <SendIcon/>
        </IconButton>
      </div>
    </div>
  );
};

export const Chat = () => {
  const classes = useStyles();
  const status = useTypedSelector(store => store.chat.status);
  const dispatch = useDispatch();


  useEffect(() => {
    if (status === ChatStatus.NULL) dispatch(ChatActions.connection());
  }, [status, dispatch]);

  if ([ChatStatus.NULL, ChatStatus.CONNECTION].includes(status)) {
    return (
      <div className={classes.wrapper}>
        <Circular className={classes.loader} size={80}/>
      </div>
    );
  }
  if ([ChatStatus.CLOSED].includes(status)) {
    return (
      <div className={classes.wrapper}>
        <Typography
          variant="h3"
          component="h3"
        >
          CONNECTION ERROR
        </Typography>
      </div>
    );
  }

  return (<ChatBody/>);
};