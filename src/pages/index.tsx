import React, { FC } from 'react'
import styled from 'styled-components'

import Typist from 'react-typist'
import { FaHeart, FaBriefcase } from 'react-icons/fa'
import Image from '../components/Image'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { CSSTransition } from 'react-transition-group'
import Link from '../components/BigLink'

const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  max-width: 50vw;
  grid-row-gap: 1rem;
  padding: 1rem 0;
  @media screen and (max-width: 720px) {
    max-width: 80vw;
  }

  .fade-enter,
  .fade-appear {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-appear-active {
    opacity: 1;
    transition: opacity 3000ms;
  }
`

const Greetings = styled.div`
  text-align: center;
  .Typist {
    color: ${(props) => props.theme.black};
    display: block;
    font-size: 3rem;
    font-weight: bold;
    margin: 0.5em 0em;
    line-height: 1.5;
  }
`

const ImageContainer = styled.div`
  min-width: 100%;
  div {
    height: 100% !important;
  }
  img {
    margin: 0 auto;
  }
`

const LogoWrapper = styled.div`
  img {
    max-width: 100px;
  }
`

const IndexPage: FC = () => {
  return (
    <Layout>
      <SEO title='Home Page' />

      <Container>
        <CSSTransition classNames='fade' in={true} appear timeout={3000}>
          <LogoWrapper>
            <img src={require('../images/sid-logo.png')} alt='Logo' />
          </LogoWrapper>
        </CSSTransition>
        <Greetings>
          <Typist
            className='Greetings'
            cursor={{
              show: true,
              blink: true,
              startDelay: 3000,
              element: '_'
            }}
          >
            Hi, I'm Sid
          </Typist>
          <p>
            A Frontend Engineer who loves learning and sharing new things with
            love <FaHeart size={25} color='red' />
          </p>
        </Greetings>
        <Link to='/resume'>
          <FaBriefcase />
          <span style={{ paddingLeft: '.5rem' }}>Hire Me</span>
        </Link>
        <CSSTransition classNames='fade' in={true} appear timeout={3000}>
          <ImageContainer>
            <Image />
          </ImageContainer>
        </CSSTransition>
      </Container>
    </Layout>
  )
}

export default IndexPage
