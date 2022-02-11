import styled from "styled-components";

export const Btn = styled.button`
  background: var(--primary-green);
  color: var(--primary-white);
  border: none;
  height: 50px;
  width: 100%;
  text-transform: uppercase;
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  transition: var(--transition);
  font-size: 0.875rem;
  /* border: 2px solid var(--clr-black); */
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  /* border-radius: var(--radius); */
`;