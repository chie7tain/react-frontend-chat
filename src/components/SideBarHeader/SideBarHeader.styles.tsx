import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid gold;
`;
export const DotsAvatatarStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  width: 50%;
`;
export const DotsContainer = styled.div`
  display: flex;
  width: 50%;
`;

export const Dots = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gold;
  margin: 0 5px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  width: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;

export const StatusIcon = styled.i`
  width: 30px;
  border: 1px dashed var(--primary-black);
  height: 30px;
  border-radius: 50%;
  background-color: var(--primary-grey);
`;
