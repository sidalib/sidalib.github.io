/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div
          style={{
            fontFamily: "Helvetica",
            height: "100vh",
          }}
        >
          <main style={{ paddingBottom: "50px" }}>{children}</main>
          <footer
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "#001f3f",
              width: "100vw",
              height: "100px",
              color: "white",
              display: "grid",
              alignItems: "center",
              justifyItems: "center",
              padding: 0,
              margin: 0,
            }}
          >
            <p>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                }}
                href="https://www.gatsbyjs.org"
              >
                Gatsby
              </a>
            </p>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
