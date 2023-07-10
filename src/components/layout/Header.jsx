import React from "react";
import { HeaderContainer, HeaderTitle } from "./Header.css";

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
