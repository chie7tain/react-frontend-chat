import React from "react";

// import {
//   solid,
//   regular,
//   brands,
//   // @ts-ignore
// } from "@fortawesome/fontawesome-svg-core/import";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// components

import {
  Wrapper,
  StatusIcon,
  Dots,
  AvatarContainer,
  Avatar,
  DotsContainer,
  DotsAvatatarStatus,
} from "./SideBarHeader.styles";

const SideBarHeader = () => (
  <Wrapper>
    <DotsAvatatarStatus>
      <DotsContainer>
        <Dots />
        <Dots />
        <Dots />
      </DotsContainer>
      <AvatarContainer>
        <Avatar src="https://res.cloudinary.com/chie7tain/image/upload/v1643416214/obauglrjdyiog5q1ndn4.png" />
      </AvatarContainer>
      <i className="fa-regular fa-circle-dashed"></i>
    </DotsAvatatarStatus>
  </Wrapper>
);
export default SideBarHeader;
