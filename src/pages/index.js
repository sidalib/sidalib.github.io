import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'
import { FaWrench, FaHeart } from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group'

import Layout from '../components/layout'
// TODO: use this below
// import Image from '../components/image'
import SEO from '../components/seo'

const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  max-width: 50vw;
  padding: 1rem 0;
  @media screen and (max-width: 720px) {
    max-width: 80vw;
  }

  .balloon-enter,
  .balloon-appear {
    opacity: 0;
  }
  .balloon-enter-active,
  .balloon-appear-active {
    opacity: 1;
    transition: opacity 2s;
  }
`

const Greetings = styled.div`
  text-align: center;
  .Typist {
    color: ${props => props.theme.black};
    display: block;
    font-size: 3rem;
    margin: 0.5em 0em;
    line-height: 1.5;
  }
`

const ImageContainer = styled.div`
  img {
    margin: 0 auto;
  }
`

const Logo = styled.img`
  margin-top: 2rem;
  max-width: 100px;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title='Home'
      keywords={[`gatsby`, `application`, `react`, 'Sid Bentifraouine']}
    />
    <Container>
      <small>
        Work in progress <FaWrench size={13} />
      </small>
      <CSSTransition classNames='balloon' in={true} appear timeout={2000}>
        <Logo src={require('../images/sid-logo.png')} />
      </CSSTransition>
      <Greetings>
        <Typist
          className='Greetings'
          cursor={{
            show: true,
            blink: true,
            hideWhenDone: true,
            hideWhenDoneDelay: 3000
          }}
        >
          Hi, I'm Sid
        </Typist>
        <p>
          A Frontend Engineer who loves learning and sharing new things with
          love <FaHeart size={25} color='red' />
        </p>
      </Greetings>
      <CSSTransition classNames='balloon' in={true} appear timeout={2000}>
        <ImageContainer>
          <img src={require('../images/sid-the-builder.png')} />
        </ImageContainer>
      </CSSTransition>
    </Container>
  </Layout>
)

export default IndexPage
