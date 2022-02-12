import React from "react";
import ChatTabs from "../ChatTabs/ChatTabs";
import ChatTile from "../ChatTile/ChatTile";
import Input from "../Input/Input";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import { Wrapper, ComponentWrapper } from "./Sidebar.styles";
const Sidebar = () => (
  <Wrapper>
    <ComponentWrapper>
      <SideBarHeader />
    </ComponentWrapper>
    <ComponentWrapper>
      <Input />
    </ComponentWrapper>
    <ComponentWrapper>
      <ChatTabs />
    </ComponentWrapper>
    <ComponentWrapper>
      <ChatTile />
    </ComponentWrapper>
  </Wrapper>
);
export default Sidebar;
