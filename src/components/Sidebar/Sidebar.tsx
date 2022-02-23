import React, { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";

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

  const setActiveHandler = (e: any) => {
    setActive(e.target.innerHTML);
    setChatType(e.target.innerHTML);
    setCategoryData(e.target.innerHTML);
  };
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [category, setCategoryData] = useState("favorite");

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      let authdata = JSON.stringify({
        email: "fredrickokwuobi@gmail.com",
        password: "123456789",
      });

      let config: AxiosRequestConfig<any> = {
        method: "post",
        url: "http://127.0.0.1:3050/api/v1/user/login",
        headers: {
          "Content-Type": "application/json",
          Cookie:
            "connect.sid=s%3A4Dm6v_E25FI_WfWA587CeK08BD1cPiDP.4Da%2FP5EJla6JufXJZ5hVVUhp1qI1lJauXq6HT%2B8tJ1E",
        },
        data: authdata,
      };
      let url = "http://127.0.0.1:3050/api/v1/";
      if (category === "favorite") {
        url += `users/friends/${category}`;
      } else if (category === "groups") {
        url += category;
      } else {
        url += `users/${category}`;
      }
      let response = await axios(config);
      let { accessToken } = response.data;

      let dataConfig: AxiosRequestConfig<any> = {
        method: "get",
        url: url,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Cookie:
            "connect.sid=s%3AM3oAXCWrsMzHbcvZjNCebbZqsE2icTvX.TlZUBHIvRujgMAvQ225ahFLZ%2F5262KJj1nOtzEcM8ZE",
        },
      };

      let data = await (await axios(dataConfig)).data;
      console.log(url);

      let chatData = data.data.data;
      console.log(chatData);
      if (chatData > 0) {
        let friends = chatData.map((chat: any) => chat.friendId);
        if (category === "favorite") {
          setChats(chatData);
        } else if (category === "friends") {
          setChats(friends);
        } else {
          setChats(chatData);
        }
      } else {
      }

      setLoading(false);
    } catch (err: any) {
      setError(err);
      console.log(err.response.data);
    }
  }, [category]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(chats);
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
        <Input />
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
         {
                  chats.map((chat: any) => {
            return (
              <ChatTile
                key={chat.id}
                firstName={chat.firstName}
                lastName={chat.lastName}
                category={chatType}
                image={chat.avatar}
                id={chat.id}
                // lastMessage={chat.lastMessage}
                // time={chat.time}
              />
            );
          })
        }
        {/* <ChatTile firstName={firstName} lastName={lastName} image={image} /> */}
      </ComponentWrapper>
      {/* end of tils for the various chats */}
    </Wrapper>
    // end of the sidebar
  );
};
export default Sidebar;
