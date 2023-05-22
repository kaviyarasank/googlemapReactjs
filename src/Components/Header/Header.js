import React, { useState } from "react";
import "./Header.css";
import Hambergur from "../../assets/menu.svg"
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const click = () => {
    setShow(!show);
  };
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 250) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <div className="">
      <div className={`topnav ${show ? "responsive" : ""} ${navColour ? "navColourTrue" : "navColourFalse"}`}>
        <div className="logoDiv">
        <div className="logoTag">
            <img className="logoImage" onClick={()=>navigate("/")} src={logo}/>
            </div>
        </div>
        <div className="menuBardiv">
        <a href="/">HOME</a>
        <div className="dropdownHeader">
          <button className="dropbtn" onClick={()=>navigate("/about")}>
            ABOUT US
            <i className="fa fas fa-angle-down dropIcon"></i>
          </button>
          <div className="dropdown-content">
            <a href="/about">Upcomming Events</a>
            <a href="/about/events">Events</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href="#news">IN STUDIO CLASSES</a>
        <div className="dropdownHeader">
          <button className="dropbtn">
            EVENTS & CUSTOMIZED SESSIONS
            <i className="fa fas fa-angle-down dropIcon"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href="#news">TOOLBOX</a>
        <a href="#news">RESIDENCY</a>
        <a href="#news">WELLNESS</a>
        <a href="#news">GALLERY</a>
        <a href="#news">FAQ</a>
        <a href="#news">CONTACT US</a>
        <a href="#news">BLOG</a>

        </div>
        <div className="icon" onClick={click}>
          <img src={Hambergur} className=""/>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
