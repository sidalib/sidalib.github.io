import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  align-self: end;
  background-color: #001f3f;
  width: 100vw;
  height: 10vh;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.2);
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
      <p>© {new Date().getFullYear()}, Sid Bentifraouine</p>
    </Container>
  )
}

export default Footer
