import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FooterTitle, LinkList } from "./Footer.css";
import { toast } from "react-toastify";

const Footer = () => {
  const [cookies, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  return (
    <div>
      <FooterTitle>Quick Links</FooterTitle>
      <LinkList>
        <Link to="/">Assignments List</Link>
        <Link to="/submissions">Submissions List</Link>
        {cookies.token && (
          <span
            to="/login"
            onClick={() => {
              removeCookie("userId");
              removeCookie("token");
              navigate("/login");
              toast("Logout Success", {
                type: "success",
              });
            }}>
            Logout
          </span>
        )}
      </LinkList>
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        Copyright Yathaartha 2023. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
