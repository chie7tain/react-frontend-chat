import React from "react";
import ChatTabs from "../ChatTabs/ChatTabs";
import Input from "../Input/Input";
import { Wrapper } from "./Sidebar.styles";
 const Sidebar = () => (
  <Wrapper>
    <Input />
    <ChatTabs />
  </Wrapper>
);
export default Sidebar