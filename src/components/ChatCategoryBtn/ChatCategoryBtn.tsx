import React from "react";
import { Btn } from "./ChatCategoryBtn.styles";

interface ChatCategoryBtnProps {
  active: boolean;
  category: string;
  onClick: (e: any) => any;
  children: React.ReactNode;
}

const ChatCategoryBtn: React.FC<ChatCategoryBtnProps> = (props) => {
  return (
    (
      <Btn
        active={props.active}
        category={props.category}
        onClick={props.onClick}
      >
        {props.children}
      </Btn>
    )
  );
};

export default ChatCategoryBtn;
