import React, { useState, useEffect, ReactElement } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import Burger from './Burger'

function Header(): ReactElement {
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return window.removeEventListener('scroll', handleScroll, false)
  }, [])

  const toggleBurger = () => {
    setIsBurgerActive(!isBurgerActive)
  }

  const handleScroll = () => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 10) {
      setHasScrolled(true)
    } else {
      setHasScrolled(hasScrolled)
    }
  }

  return (
    <Container hasScrolled={hasScrolled}>
      <ContainerGroup>
        <Logo to='/'>
          <img
            src={require('../images/sid-logo.png')}
            alt='Logo de Cap n Beret'
          />
        </Logo>
        <Links isBurgerActive={isBurgerActive} hasScrolled={hasScrolled}>
          <li>
            <Link to='#intro'>Intro</Link>
          </li>
          <li>
            <Link to='#tools'>My Tools</Link>
          </li>
          <li>
            <Link to='#me'>About me</Link>
          </li>
          <li>
            <Link to='#contact'>Contact</Link>
          </li>
        </Links>
        <BurgerWrapper>
          <Burger
            isActive={isBurgerActive}
            onClick={toggleBurger}
            color={hasScrolled ? '#fff' : '#2d3e4f'}
          />
        </BurgerWrapper>
      </ContainerGroup>
    </Container>
  )
}

type ContainerProps = {
  hasScrolled: boolean
}
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: ${({ hasScrolled }: ContainerProps) =>
    hasScrolled ? 'rgb(33,43,54, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  padding: ${({ hasScrolled }: ContainerProps) =>
    hasScrolled ? '0' : '1vh 0'};
  box-shadow: 0px 1px 2px rgba(45, 62, 79, 0.3);
  transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
`

const ContainerGroup = styled.div`
  display: grid;
  grid-template-areas: 'Logo Burger' 'Links Links';
  @media (min-width: 720px) {
    grid-template-areas: 'Logo Links';
    justify-items: center;
  }
`

const Logo = styled(Link)`
  grid-area: Logo;
  img {
    max-width: 3em;
    margin: 0.6em 1.5em;
  }
`

const BurgerWrapper = styled.div`
  grid-area: Burger;
  justify-self: end;
  align-self: center;
  margin: 0.6em 1.5em;
  max-width: 2em;
  > {
    vertical-align: middle;
  }
  @media (min-width: 720px) {
    display: none;
  }
`

type LinksProps = {
  isBurgerActive: boolean
  hasScrolled: boolean
}
const Links = styled.ul`
  margin: 1em;
  padding: 0 0;
  list-style: none;
  grid-area: Links;
  display: ${({ isBurgerActive }: LinksProps) =>
    isBurgerActive ? 'grid' : 'none'};
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 2em;
  align-items: center;
  justify-items: center;
  li {
    a {
      font-weight: bold;
      text-decoration: none;
      color: ${({ hasScrolled }: LinksProps) =>
        hasScrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(45, 62, 79, 1)'};
      transition: 0.3s text-shadow ease-in-out;
      &:hover {
        text-shadow: 0 0.1em 0.1em rgba(45, 62, 79, 0.3);
      }
    }
  }
  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1.5em;
    grid-template-rows: none;
  }
`

export default Header
