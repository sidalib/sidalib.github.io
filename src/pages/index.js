import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'
import { FaWrench, FaHeart, FaLaptopCode } from 'react-icons/fa'

import Layout from '../components/layout'
// TODO: use this below
// import Image from '../components/image'
import SEO from '../components/seo'

const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  max-width: 50vw;
  @media screen and (max-width: 720px) {
    max-width: 80vw;
  }
`

const Greetings = styled.div`
  text-align: center;
  margin-top: 1rem;
  .Typist {
    display: block;
    font-size: 3rem;
    margin: 1em 0em;
    line-height: 1.5;
  }
`

const ImageContainer = styled.div`
  img {
    margin: 0 auto;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title='Home'
      keywords={[`gatsby`, `application`, `react`, 'Sid Bentifraouine']}
    />
    <Container>
      <Greetings>
        <b>NOTE</b>: Work in progress <FaWrench size={23} />
        <Typist
          className='Greetings'
          avgTypingDelay={100}
          cursor={{
            show: true,
            blink: true,
            hideWhenDone: true,
            hideWhenDoneDelay: 3000
          }}
        >
          Hi, I'm Sid Bentifraouine
        </Typist>
        <p>
          I'm a Frontend Engineer who loves learning and sharing new things with
          love. <FaHeart size={25} color='red' />
        </p>
      </Greetings>
      <ImageContainer>
        <img src={require('../images/sid-the-builder.png')} />
      </ImageContainer>
    </Container>
  </Layout>
)

export default IndexPage
