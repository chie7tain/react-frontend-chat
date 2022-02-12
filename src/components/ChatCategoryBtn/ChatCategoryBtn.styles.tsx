import styled from "styled-components";

type Props = {
  category: string;
  children: React.ReactNode;
};

export const Btn = styled.button<Props>`
  background: ${(props) =>
    props.category === "favorite"
      ? "var(--primary-green)"
      : "var(--primary-grey)"};
  color: ${(props) =>
    props.category === "favorite"
      ? "var(--primary-white)"
      : "var(--primary-text-grey)"};
  border: none;
  width: 100%;
  height: 45.21px;
  text-transform: uppercase;
  letter-spacing: var(--spacing);
  display: inline-block;
  transition: var(--transition);
  font-size: 0.7rem;
  font-weight:bold;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: ${(props) =>
    props.category === "favorite"
      ? "14.1643px 0px 0px 14.1643px"
      : props.category === "friends"
      ? "0px"
      : props.category === "groups"
      ? "0px 14.1643px 14.1643px 0px"
      : "0px"};
`;
