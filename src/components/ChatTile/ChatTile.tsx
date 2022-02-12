import React from "react";
import {
  Wrapper,
  LastMessage,
  NameMessageContainer,
  Name,
  TileImageContainer,
  TimeUnReadContainer,
  UnreadCount,
  LastMessageTime,
  Image,
  ImageNameMessageContainer,
} from "./ChatTile.styles";
const ChatTile = () => (
  <Wrapper>
    <ImageNameMessageContainer>
      <TileImageContainer>
        <Image
          src="https://res.cloudinary.com/chie7tain/image/upload/v1643416214/obauglrjdyiog5q1ndn4.png"
          alt="user"
        />
      </TileImageContainer>
      <NameMessageContainer>
        <Name>Jane Copper</Name>
        <LastMessage>what's up na</LastMessage>
      </NameMessageContainer>
    </ImageNameMessageContainer>
    <TimeUnReadContainer>
      <LastMessageTime>7.38am</LastMessageTime>
      <UnreadCount>3</UnreadCount>
    </TimeUnReadContainer>
  </Wrapper>
);
export default ChatTile;
