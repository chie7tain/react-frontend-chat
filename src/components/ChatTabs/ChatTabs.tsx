import React from "react";
import { BtnContainer } from "./ChatTabs.styles";
import ChatCategoryBtn from "../ChatCategoryBtn/ChatCategoryBtn";

const ChatTabs = () => (
  <BtnContainer>
    <ChatCategoryBtn category="favorite">Favorite</ChatCategoryBtn>
    <ChatCategoryBtn category="friends">Friends</ChatCategoryBtn>
    <ChatCategoryBtn category="groups">Groups</ChatCategoryBtn>
  </BtnContainer>
);
export default ChatTabs;
