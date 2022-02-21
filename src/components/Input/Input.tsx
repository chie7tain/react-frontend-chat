import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

import { Wrapper, StyledInput } from "./Input.styles";

// interface for Props
interface Props {
  setChatType: (chatType: string) => void;
}

const Input: React.FC<Props> = (props: any) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  // determine when to stop the fetching of data
  const [loading, setLoading] = useState(false);
  const [chat, setChats] = useState([]);
  const [value, setValue] = useState("");
  console.log(props);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const axios = require("axios");
        let data = JSON.stringify({
          email: "fredrickokwuobi@gmail.com",
          password: "123456789",
        });

        let config = {
          method: "post",
          url: "http://127.0.0.1:3050/api/v1/user/login",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "connect.sid=s%3A4Dm6v_E25FI_WfWA587CeK08BD1cPiDP.4Da%2FP5EJla6JufXJZ5hVVUhp1qI1lJauXq6HT%2B8tJ1E",
          },
          data: data,
        };
        let friendsUrl = "http://127.0.0.1:3050/api/v1/users/user/friends";
        let groupsUrl = "";
        let response = await axios(config);
        let { accessToken } = response.data;
        console.log(accessToken);
        let favConfig = {
          method: "get",
          url: "http://127.0.0.1:3050/api/v1/users/user/friends/favorite",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Cookie:
              "connect.sid=s%3AM3oAXCWrsMzHbcvZjNCebbZqsE2icTvX.TlZUBHIvRujgMAvQ225ahFLZ%2F5262KJj1nOtzEcM8ZE",
          },
        };

        let favRes = await axios(favConfig);
        console.log(favRes.data);
        setChats(favRes.data);
        setLoading(false);
      } catch (err: any) {
        console.log(err.response.data);
      }
    };
    fetchData();
  }, []);
  console.log(chat);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("input");
    // console.log(e.target.value);
    // const searchText = textInputRef.current!.value;
  };
  return (
    <Wrapper>
      <StyledInput
        onChange={(e) => handleInput(e)}
        type="text"
        placeholder="Search or start new chat"
      />
    </Wrapper>
  );
};
export default Input;
