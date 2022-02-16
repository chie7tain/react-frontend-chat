import styled from "styled-components";

type Props = {
  active: boolean;
  category: string;
  children: React.ReactNode;
};

export const Btn = styled.button<Props>`
  color: var(--primary-text-grey);
  border: none;
  width: 100%;
  height: 40px;
  text-transform: uppercase;
  letter-spacing: 3px;
  /* display: inline-block; */
  transition: var(--transition);
  font-size: 0.7rem;
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
  outline: none;
  &:hover {
    background: var(--primary-light-green);
    color: var(--primary-white);
  }
  opacity: 0.7;
  ${({ active }) => active && `opacity:1, background: var(--primary-green)`};
  ${({ active }) => active && `background: var(--primary-light-green)`}
`;
