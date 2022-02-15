import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

import { Wrapper, StyledInput } from "./Input.styles";

const Input = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  // determine when to stop the fetching of data
  const [loading, setLoading] = useState(false);
  const [chat, setChats] = useState([]);
  const [value, setValue] = useState("");
  // "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // var data = JSON.stringify({
        //   email: "fredrickokwuobi@gmail.com",
        //   password: "123456789"
        // });

        // const config: AxiosRequest= {
        //   method: "post",
        //   url: "http://127.0.0.1:3050/api/v1/user/login",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Cookie:
        //       "connect.sid=s%3AtUvdI_13BB1JQ3fhR8YnyevIAk-_kp5t.4WBbQ55U1a0MAvUq6lu0KjtQ3kQDeVOYYeCcHvEcRCg",
        //   },
        //   data: data,
        // };
        // users / user / friends / favorite;
        // let res = await axios({
        //   method: "get",
        //   url: "http://127.0.0.1:3050/api/v1/users/user/friends/favorite;",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization:
        //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk3ZDc4OGE5OGRmMzhiYzk5ZGQ3MiIsImlhdCI6MTY0NDcwNDcwN30.DDTr5GO4iK6g-by-V5GkneCOaOYRrPL4yE2NucrC1AI",
        //   },
        //   data: data,
        // });
        // .then(function (response) {
        //   console.log(JSON.stringify(response.data));
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });

        // console.log(JSON.stringify(response.data));
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

        let response = axios(config);

        // .then((response: { data: any }) => {
        //   console.log(JSON.stringify(response.data));
        //   console.log(response.data);
        // })
        // .catch((error: any) => {
        //   console.log(error);
        // });

        let res = await axios({
          method: "get",
          url: "http://127.0.0.1:3050/api/v1/users/user/friends/favorite;",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk3ZDc4OGE5OGRmMzhiYzk5ZGQ3MiIsImlhdCI6MTY0NDcwNDcwN30.DDTr5GO4iK6g-by-V5GkneCOaOYRrPL4yE2NucrC1AI",
          },
          data: data,
        });

        // setChats(response.data);
        setLoading(false);
      } catch (err: any) {
        console.log(err.response.data);
      }
    };
    fetchData();
  }, []);
  console.log(chat);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("input");
    console.log(e.target.value);
    const searchText = textInputRef.current!.value;
  };
  return (
    <Wrapper>
      <StyledInput
        onChange={(e) => handleInput(e)}
        type="text"
        placeholder="Type a message..."
      />
    </Wrapper>
  );
};
export default Input;
