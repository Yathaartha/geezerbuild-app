import { styled } from "styled-components";

export const FooterTitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 1.6rem;
  border-top: 1px solid #ccc;
  padding: 1rem;
`;

export const LinkList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  a,
  span {
    text-decoration: none;
    font-size: 1.4rem;
    color: blue;
    cursor: pointer;
  }
`;
