import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`

const Greetings = styled.div`
  .Typist {
    display: block;
    font-size: 3rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin: 1em 0em;
  }
`

const ImageContainer = styled.div`
  min-width: 600px;
  display: grid;
  margin: 0 auto;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title='Home'
      keywords={[`gatsby`, `application`, `react`, 'Sid Bentifraouine']}
    />
    <Container>
      <Greetings>
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
          love 👨‍💻❤️
        </p>
      </Greetings>
      <ImageContainer>
        <Image />
      </ImageContainer>
    </Container>
  </Layout>
)

export default IndexPage
