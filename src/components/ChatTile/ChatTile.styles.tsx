import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
`;
export const ImageNameMessageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  div {
    margin-right: 10px;
  }
`;
export const TileImageContainer = styled.div`
  width: 20%;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: var(--borderRadius);
`;

export const NameMessageContainer = styled.div``;

export const Name = styled.h3`
  font-size: 1rem;
  font-family: "Redressed", cursive;
`;

export const LastMessage = styled.p`
  font-size: 0.8rem;
  font-family: "Redressed", cursive;
`;

export const TimeUnReadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LastMessageTime = styled.p`
  font-family: "Roboto", sans-serif;
  color: var(--primary-text-grey);
  font-size: 0.8rem;
`;

export const UnreadCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary-light-shade-green);
  color: var(--primary-light-green);
`;
