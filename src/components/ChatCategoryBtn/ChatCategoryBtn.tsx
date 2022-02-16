import React from "react";
import { Btn } from "./ChatCategoryBtn.styles";

interface ChatCategoryBtnProps {
  active: boolean;
  category: string;
  onClick: () => void;
  children: React.ReactNode;
}

const ChatCategoryBtn: React.FC<ChatCategoryBtnProps> = (props) => {
  return (
    console.log(props),
    (
      <Btn active={props.active} category={props.category}>
        {props.children}
      </Btn>
    )
  );
};

export default ChatCategoryBtn;
