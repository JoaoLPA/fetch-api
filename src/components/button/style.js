import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 12px;
  color: #bf3636;
  background-color: #261515;
  height: 42px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  transition: color 0.2s ease;
  transition: box-shadow 0.2s ease-out;

  &:hover {
    color: #f24c3d;
    background-color: #3f403b;
    box-shadow: 5px 5px 0 0 #f24c3d;
  }
`;
