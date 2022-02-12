import React from "react";
import { Btn } from "./ChatCategoryBtn.styles";

interface ChatCategoryBtnProps {
  category: string;
  children: React.ReactNode;
}

const ChatCategoryBtn: React.FC<ChatCategoryBtnProps> = (props) => {
  return <Btn category={props.category}>{props.children}</Btn>;
};

export default ChatCategoryBtn;
