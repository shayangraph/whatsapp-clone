// sidebar of whatsapp text of contacts
// import
import React from "react";
import "./SidebarChat.css";
// import tool meatarial ui
import { Avatar } from "@material-ui/core";


function SidebarChat() {
  return (
    <div className="sidebarChat">
      {/* avatar */}
      <Avatar />
      {/* name and description contact */}
      <div className="sidebarChat__info">
        <h2>room name</h2>
        <p>description</p>
      </div>
    </div>
  );
}

export default SidebarChat;
