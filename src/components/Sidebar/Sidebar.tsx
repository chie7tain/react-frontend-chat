import React from "react";
import ChatTabs from "../ChatTabs/ChatTabs";
import Input from "../Input/Input";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import { Wrapper } from "./Sidebar.styles";
const Sidebar = () => (
  <Wrapper>
    <SideBarHeader />
    <Input />
    <ChatTabs />
  </Wrapper>
);
export default Sidebar;
