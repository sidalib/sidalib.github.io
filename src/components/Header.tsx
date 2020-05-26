import React, { ReactElement } from 'react'
import styled from 'styled-components'

export default function Header(): ReactElement {
  return (
    <Container>
      <Logo />
      <LinksContainer>
        <Link>home</Link>
        <Link>blog</Link>
        <Link>contact</Link>
      </LinksContainer>
    </Container>
  )
}

const Container = styled.header`
  padding: 1.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
`
const Logo = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
`

const LinksContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Link = styled.a`
  margin: 0 1rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  opacity: 0.7;
  transition: opacity 0.25s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 1;
  }
`
