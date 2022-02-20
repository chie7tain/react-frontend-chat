import React from "react";
import ChatTabs from "../ChatTabs/ChatTabs";
import ChatTile from "../ChatTile/ChatTile";
import Input from "../Input/Input";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import { Wrapper, ComponentWrapper } from "./Sidebar.styles";
const Sidebar = () => (
  // sidebar
  <Wrapper>
    {/* the sidebar header container */}
    <ComponentWrapper>
      <SideBarHeader />
    </ComponentWrapper>
    {/* end of the sidebarHeader */}
    {/* the search input field for the search */}
    <ComponentWrapper>
      <Input />
    </ComponentWrapper>
    {/* end of the search input field container */}
    {/* chat tabs button for the various chats */}
    <ComponentWrapper>
      <ChatTabs />
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
export default Sidebar;
