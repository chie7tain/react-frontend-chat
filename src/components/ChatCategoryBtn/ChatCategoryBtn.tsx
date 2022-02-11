import React from "react";
import { Btn } from "./ChatCategoryBtn.styles";

interface ChatCategoryBtnProps {
  category: string;
  children: React.ReactNode;
}

const ChatCategoryBtn: React.FC<ChatCategoryBtnProps> = (props) => {
  console.log(props);
  return <Btn >{props.children}</Btn>;
};

export default ChatCategoryBtn;
