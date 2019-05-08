import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { FaLinkedin, FaTwitter, FaDev, FaMedium } from 'react-icons/fa'

const Container = styled.footer`
  align-self: end;
  background-color: ${props => props.theme.white};
  width: 100vw;
  padding-top: 1rem;
  margin: 0;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-row-gap: 0.5rem;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.black};
  p {
    margin: 0;
    padding: 0;
    a {
      text-decoration: none;
      font-weight: bold;
    }
  }
`

const SocialLinks = styled.div`
  display: grid;
  grid-template: none / repeat(4, 1fr);
  grid-gap: 0 50px;
  align-items: center;
  justify-items: center;

  & > a {
    transition: 0.5s;
    text-decoration: none;
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`

const ICONS_SIZE = 25
const SOCIAL_LINKS = {
  medium: {
    url: 'https://medium.com/@sidbentifraouine',
    color: '#12100E'
  },
  twitter: {
    url: 'https://twitter.com/sbentifraouine',
    color: '#1E9EED'
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/sidbentifraouine',
    color: '#0077B5'
  },
  dev: {
    url: 'https://dev.to/sidbentifraouine',
    color: '#0D0E0F'
  }
}

const Footer = () => {
  return (
    <Container>
      <SocialLinks>
        <a href={SOCIAL_LINKS.linkedin.url} target='_blank'>
          <FaLinkedin size={ICONS_SIZE} color={SOCIAL_LINKS.linkedin.color} />
        </a>
        <a href={SOCIAL_LINKS.twitter.url} target='_blank'>
          <FaTwitter size={ICONS_SIZE} color={SOCIAL_LINKS.twitter.color} />
        </a>
        <a href={SOCIAL_LINKS.dev.url} target='_blank'>
          <FaDev size={ICONS_SIZE} color={SOCIAL_LINKS.dev.color} />
        </a>
        <a href={SOCIAL_LINKS.medium.url} target='_blank'>
          <FaMedium size={ICONS_SIZE} color={SOCIAL_LINKS.medium.color} />
        </a>
      </SocialLinks>
      <small>© 2019, Sid Bentifraouine</small>
    </Container>
  )
}

export default Footer
