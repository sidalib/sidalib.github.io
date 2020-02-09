import React, { FC } from 'react'
import styled from 'styled-components'

import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter
} from 'react-icons/fa'

const ICONS_SIZE = 35
const SOCIAL_LINKS = [
  {
    url: 'https://medium.com/@sidbentifraouine',
    icon: () => <FaMedium size={ICONS_SIZE} color='#12100E' />
  },
  {
    url: 'https://twitter.com/sbentifraouine',
    icon: () => <FaTwitter size={ICONS_SIZE} color='#1E9EED' />
  },
  {
    url: 'https://github.com/sidbentifraouine',
    icon: () => <FaGithub size={ICONS_SIZE} color='#23282E' />
  },
  {
    url: 'https://www.linkedin.com/in/sidbentifraouine',
    icon: () => <FaLinkedin size={ICONS_SIZE} color='#0077B5' />
  }
  // {
  //   url: 'https://dev.to/sidbentifraouine',
  //   icon: () => <FaDev size={ICONS_SIZE} color='#0D0E0F' />
  // }
]

export default () => {
  return (
    <Container>
      <SocialLinks
        columnsNumber={Object.getOwnPropertyNames(SOCIAL_LINKS).length - 1}
      >
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.url}
            href={social.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <social.icon />
          </a>
        ))}
      </SocialLinks>
      <small>© 2019, Sid Bentifraouine</small>
    </Container>
  )
}

const Container = styled.footer`
  padding-top: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-row-gap: 0.5rem;
  color: ${(props) => props.theme.black};
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
  grid-template: none / repeat(
      ${(props: { columnsNumber: number }) => props.columnsNumber},
      1fr
    );
  grid-gap: 0 2rem;
  align-items: center;
  justify-items: center;

  & > a {
    transition: all 0.3s ease-out;
    text-decoration: none;
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`
