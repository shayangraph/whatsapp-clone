// sidebar of whatsapp they show header and contact
// import
import React from "react";
import "./Sidebar.css";
// import metarial icons
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
// tools metarial icon
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    // sidebar whatsapp
    <div className="sidebar">
      {/* sidebar header */}
      <div className="sidebar__header">
        {/* picture avatar */}
        <Avatar src="https://avatars.githubusercontent.com/u/55196075?s=60&v=4" />
        <div className="sidebar__headerRight">
          {/* icons sidebar */}
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {/* search whatsapp */}
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search or start new chat"/>
        </div>
      </div>
      {/* contact chat */}
      <div className="sidebar__chats">
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;
