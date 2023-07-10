import React, { useEffect } from "react";
import { HeaderContainer, HeaderTitle } from "./Header.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const [cookies] = useCookies(["user"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.token || cookies.token === "undefined") {
      navigate("/login");
    }
  }, []);

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
