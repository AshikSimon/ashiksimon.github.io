/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./project_header"
import "../bootstrap.css"
import "../layout.css"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery2 {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

    function openMenu() {
        var element = document.getElementById("header")
        element.classList.add("active")
      }
      
  return (
    <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div onClick={openMenu} id="mobile-menu-open" className="shadow-large">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div>
        <main>{children}</main>
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 copyright">
                <p>Copyright &copy; {new Date().getFullYear()} Ashik Simon</p>
              </div>
            
              <div className="col-sm-5 social">
                <ul>
                  <li>
                    <a
                      href="https://linkedin.com/in/ashiksimon"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
