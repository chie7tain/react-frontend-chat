import React, { useState } from "react";
import { BtnContainer } from "./ChatTabs.styles";
import ChatCategoryBtn from "../ChatCategoryBtn/ChatCategoryBtn";

interface ChatCategoryBtnProps {
  active: string;
  category: string;
  setChatType: (e: any) => void;
  btnTypes: string[];
}

const ChatTabs: React.FC<ChatCategoryBtnProps> = ({
  setChatType,
  btnTypes,
  active,
}) => {
  return (
    <BtnContainer>
      {btnTypes.map((btnType, index) => {
        return (
          <ChatCategoryBtn
            active={active === btnType}
            category={btnType}
            key={index}
            setChatType={setChatType}
          >
            {btnType}
          </ChatCategoryBtn>
        );
      })}
    </BtnContainer>
  );
};
export default ChatTabs;
