import React, { useState } from "react";
import { BtnContainer } from "./ChatTabs.styles";
import ChatCategoryBtn from "../ChatCategoryBtn/ChatCategoryBtn";

const btnTypes = ["favorite", "friends", "groups"];

const ChatTabs = () => {
  let [active, setActive] = useState(btnTypes[0]);
  // use this to set the active state of the button and set the url to fetch data from the api
  // onClick={(e) => console.log(e.target.innerHTML)}

  return (
    <BtnContainer>
      {/* <ChatCategoryBtn category="favorite">Favorite</ChatCategoryBtn>
      <ChatCategoryBtn category="friends">Friends</ChatCategoryBtn>
      <ChatCategoryBtn category="groups">Groups</ChatCategoryBtn> */}
      {btnTypes.map((btnType, index) => {
        return (
          <ChatCategoryBtn
            active={active === btnType}
            category={btnType}
            key={index}
            onClick={() => setActive(btnType)}
          >
            {btnType}
          </ChatCategoryBtn>
        );
      })}
    </BtnContainer>
  );
};
export default ChatTabs;
