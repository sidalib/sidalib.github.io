/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

// import Header from './header'
import './layout.css'
import Footer from './footer'

const theme = {
  white: '#FDFDFF',
  black: '#393D3F',
  red: '#BE3A31'
}

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 3em 0;
`

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
      <ThemeProvider theme={theme}>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Container>
          <main>{children}</main>
          <Footer />
        </Container>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
