import React from "react";
import { Btn } from "./ChatCategoryBtn.styles";

interface ChatCategoryBtnProps {
  active: boolean;
  category: string;
  children: React.ReactNode;
  setChatType: (e: any) => void;
}

const ChatCategoryBtn: React.FC<ChatCategoryBtnProps> = ({
  category,
  active,
  children,
  setChatType,
}) => {
  return (
    <Btn active={active} category={category} onClick={setChatType}>
      {children}
    </Btn>
  );
};

export default ChatCategoryBtn;
