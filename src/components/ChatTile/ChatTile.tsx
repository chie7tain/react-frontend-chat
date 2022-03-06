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

interface ChatTileProps {
  firstName: string;
  lastName: string;
  image: string;
  id: string;
  category: string;
}
// src="https://res.cloudinary.com/chie7tain/image/upload/v1643416214/obauglrjdyiog5q1ndn4.png"
const ChatTile: React.FC<ChatTileProps> = ({ firstName, lastName, image }) => {
  return (
    <Wrapper>
      <ImageNameMessageContainer>
        <TileImageContainer>
          <Image src={image} alt="user" />
        </TileImageContainer>
        <NameMessageContainer>
          <Name>{`${firstName} ${lastName}`}</Name>
          <LastMessage>what's up na</LastMessage>
        </NameMessageContainer>
      </ImageNameMessageContainer>
      <TimeUnReadContainer>
        <LastMessageTime>7.38am</LastMessageTime>
        <UnreadCount>3</UnreadCount>
      </TimeUnReadContainer>
    </Wrapper>
  );
};
export default ChatTile;
