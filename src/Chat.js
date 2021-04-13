// all of chat section is here
// import
import React from "react";
import "./Chat.css";
// item from metarail UI
import { Avatar, IconButton } from "@material-ui/core";
// icons from metarail UI
import {
  AttachFile,
  SearchOutlined,
  MoreVert,
  InsertEmoticon,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  return (
    // chat item
    <div className="chat">
      {/* header chat*/}
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      {/* header */}
      <div className="chat__body">
        {/* chat test*/}
        <p className="chat__message">
          <span className="chat__name">Shayan</span>
          this is a message
          <span className="chat__timesstamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">Shayan</span>
          this is a message
          <span className="chat__timesstamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Shayan</span>
          this is a message
          <span className="chat__timesstamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">Shayan</span>
          this is a message
          <span className="chat__timesstamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Shayan</span>
          this is a message
          <span className="chat__timesstamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">Shayan</span>
          this is a message
          <span className="chat__timesstamp">{new Date().toUTCString()}</span>
        </p>

        {/* chat test*/}
      </div>
      {/* footer chat */}
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
      {/* footer chat */}
    </div>
  );
}

export default Chat;
