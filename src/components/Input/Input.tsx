import React, { useRef, useState, useEffect } from "react";

import { Wrapper, StyledInput } from "./Input.styles";

const Input: React.FC = () => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <Wrapper>
      <StyledInput
        onChange={handleInput}
        type="text"
        placeholder="Search or start new chat"
      />
    </Wrapper>
  );
};
export default Input;
