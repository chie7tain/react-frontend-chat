import styled from "styled-components";

// type Props = {
//   setChatType: () => void;
// };

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--primary-grey);
`;
export const StyledInput = styled.input<Props>`
  width: 100%;
  height: 45px;
  border-radius: var(--borderRadius);
  border: none;
  text-indent: 20px;
`;
