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
      <Link to="/">About</Link>
    </li>
    <li>
      <Link to="/#experience">Experience</Link>
    </li>
    <li>
      <Link to="/#education">Education</Link>
    </li>
    <li>
      <Link to="/#projects">Projects</Link>
    </li>
    <li>
      <Link to="/#skills">Skills</Link>
    </li>
    <li>
      <Link to="/#contact">Contact</Link>
    </li>
    <li>
      <a href="https://ashiksimon.com/photo-gallery/">Photography</a>
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
