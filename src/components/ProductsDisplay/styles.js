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
  &:hover {
    border-bottom: 1px solid #3f403b;
    border-right: 1px solid #3f403b;
    border-top: 1px solid #bf3636;
    border-left: 1px solid #bf3636;
    box-shadow: -3px -3px 0px 3px #bf3636, 3px 3px 0px 3px #3f403b;
  }
`;
export const ProductCard = styled.div`
  display: flex;
  div {
    padding: 12px;
    flex: 1;
  }
  h2 {
    color: #bf3636;
    font-size: 1.6rem;
    letter-spacing: 0.2px;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  img {
    width: 200px;
    height: 298px;
    object-fit: cover;
    object-position: bottom;
    margin-right: 1rem;
  }

  p {
    margin-bottom: 1rem;
    font-weight: 300;
    color: #3f403b;
    span {
      color: #261515;
    }
  }
`;
