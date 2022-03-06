import React, { useRef, useState, useEffect } from "react";

import { Wrapper, StyledInput } from "./Input.styles";

interface Props {
  handleSearch: (e: any) => any;
}

const Input: React.FC<Props> = ({ handleSearch }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <Wrapper>
      <StyledInput
        onChange={handleSearch}
        // value={}
        type="text"
        placeholder="Search or start new chat"
      />
    </Wrapper>
  );
};
export default Input;
