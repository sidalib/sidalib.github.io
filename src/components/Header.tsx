import React, { ReactElement, useEffect } from 'react'
import styled from 'styled-components'

export default function Header(): ReactElement {
  return (
    <Container>
      <h3>Sid</h3>
      <NavBar>
        <ul>
          <li>
            <a href='#who-am-i'>Who am I</a>
          </li>
          <li>
            <a href='#my-skills'>My Skills</a>
          </li>
          <li>
            <a href='#bonus'>Bonus</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </NavBar>
    </Container>
  )
}

const Container = styled.header`
  padding: 2rem 2rem 1rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  box-shadow: ${(props) => props.theme.boxShadowLight};
`

const NavBar = styled.nav`
  display: flex;
  ul {
    list-style: none;
    display: flex;
    li {
      margin: 0 1rem;
      a {
        color: ${(props) => props.theme.black};
        text-decoration: none;
      }
    }
  }
`
