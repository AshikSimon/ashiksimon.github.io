import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { render } from 'react-dom';
import {  DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function closeMenu() {
  var element = document.getElementById("header");
element.classList.remove("active");
}

const Header = ({ siteTitle }) => (
  <header id="header">
  <div onClick={closeMenu} id="mobile-menu-close">
    <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
  </div>
  <ul id="menu" onClick={closeMenu} className="shadow">
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#experience">Experience</a>
    </li>
    <li>
      <a href="#education">Education</a>
    </li>
    <li>
      <a href="#projects">Projects</a>
    </li>
    <li>
      <a href="#skills">Skills</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
