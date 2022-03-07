import styled from "styled-components";

export const Button = styled.button`
  padding: 10px;
  margin: 5px auto;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => props.theme.ui};
  color: ${(props) => props.theme.syntax};
  border: none;
`;
