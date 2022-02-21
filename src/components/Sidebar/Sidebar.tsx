import React, { useState } from "react";
import ChatTabs from "../ChatTabs/ChatTabs";
import ChatTile from "../ChatTile/ChatTile";
import Input from "../Input/Input";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import { Wrapper, ComponentWrapper } from "./Sidebar.styles";

interface Props {
  setChatType: (e: any) => any;
}
const Sidebar: React.FC<Props> = () => {
  // let [active, setActive] = useState(btnTypes[0]);
  let [chat, setChat] = useState("");
  // use this to set the active state of the button and set the url to fetch data from the api
  // onClick={(e) => console.log(e.target.innerHTML)}
  const setChatHandler = (e: any) => {
    console.log(e.target.innerHTML);
    setChat(e.target.innerHTML);
  };
  return (
    // sidebar
    <Wrapper>
      {/* the sidebar header container */}
      <ComponentWrapper>
        <SideBarHeader />
      </ComponentWrapper>
      {/* end of the sidebarHeader */}
      {/* the search input field for the search */}
      <ComponentWrapper>
        <Input setChatType={setChatHandler} />
      </ComponentWrapper>
      {/* end of the search input field container */}
      {/* chat tabs button for the various chats */}
      <ComponentWrapper>
        <ChatTabs setChatType={setChatHandler} />
      </ComponentWrapper>
      {/* end of the tabs button container */}
      {/* chat tiles for the various chats */}
      <ComponentWrapper>
        <ChatTile />
      </ComponentWrapper>
      {/* end of tils for the various chats */}
    </Wrapper>
    // end of the sidebar
  );
};
export default Sidebar;
