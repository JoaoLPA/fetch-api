import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  min-height: 300px;
  width: 100%;
  border-top: 1px solid #3f403b;
  border-left: 1px solid #3f403b;
  border-bottom: 1px solid #bf3636;
  border-right: 1px solid #bf3636;
  transition: border 0.2s ease;
  transition: box-shadow 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border-bottom: 1px solid #3f403b;
    border-right: 1px solid #3f403b;
    border-top: 1px solid #bf3636;
    border-left: 1px solid #bf3636;
    box-shadow: -3px -3px 0px 3px #bf3636, 3px 3px 0px 3px #3f403b;
  }
`;
