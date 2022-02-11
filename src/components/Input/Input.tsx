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
        var data = JSON.stringify({
          email: "fredrickokwuobi@gmail.com",
          password: "123456789",
        });

        const config = {
          method: "post",
          url: "http://127.0.0.1:3050/api/v1/user/login",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "connect.sid=s%3AtUvdI_13BB1JQ3fhR8YnyevIAk-_kp5t.4WBbQ55U1a0MAvUq6lu0KjtQ3kQDeVOYYeCcHvEcRCg",
          },
          data: data,
        };

        let response = await axios(config.url);
        // .then(function (response) {
        //   console.log(JSON.stringify(response.data));
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
        console.log(JSON.stringify(response.data));
        setChats(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
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
