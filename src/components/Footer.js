import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  background-color: #001f3f;
  width: 100vw;
  height: 10vh;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: white;
    margin: 0;
    padding: 0;
    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
  }
`

const Footer = () => {
  return (
    <Container>
      <p>
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </Container>
  )
}

export default Footer
