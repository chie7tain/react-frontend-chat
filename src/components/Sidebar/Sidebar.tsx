import React, { useState } from "react";
import ChatTabs from "../ChatTabs/ChatTabs";
import ChatTile from "../ChatTile/ChatTile";
import Input from "../Input/Input";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import { Wrapper, ComponentWrapper } from "./Sidebar.styles";

// interface Props {
//   setChatType: (e: any) => any;
// }
const Sidebar: React.FC = () => {
  const btnTypes = ["favorite", "friends", "groups"];
  const [active, setActive] = useState(btnTypes[0]);

  const [chatType, setChatType] = useState("favorite");
  const [chatData, setChatData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [chatDataFav, setChatDataFav] = useState([]);
  const [chatDataFriends, setChatDataFriends] = useState([]);
  const [chatDataGroups, setChatDataGroups] = useState([]);

  let [chat, setChat] = useState("");
  const setChatHandler = (e: any) => {
    console.log(e.target.innerHTML);
    setChat(e.target.innerHTML);
  };
  const setActiveHandler = (e: any) => {
    setActive(e.target.innerHTML);
    setChatType(e.target.innerHTML);
  };
  return (
    // sidebar
    <Wrapper>
      {/* the sidebar header container */}
      <ComponentWrapper>
        <SideBarHeader />
      </ComponentWrapper>
      {/* end of the sidebarHeader */}
      {/* the search input field for the search */}
      <ComponentWrapper>
        <Input setChatType={setChatHandler} />
      </ComponentWrapper>
      {/* end of the search input field container */}
      {/* chat tabs button for the various chats */}
      <ComponentWrapper>
        <ChatTabs
          setChatType={setActiveHandler}
          btnTypes={btnTypes}
          active={active}
          category={chatType}
        />
      </ComponentWrapper>
      {/* end of the tabs button container */}
      {/* chat tiles for the various chats */}
      <ComponentWrapper>
        <ChatTile />
      </ComponentWrapper>
      {/* end of tils for the various chats */}
    </Wrapper>
    // end of the sidebar
  );
};
export default Sidebar;
