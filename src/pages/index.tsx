import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import Typist from 'react-typist'
import { Layout, SEO } from '../components'
import { FaArrowRight, FaPlus, FaCross, FaTimes } from 'react-icons/fa'

export default function LandingPage() {
  return (
    <Layout>
      <SEO title='Welcome !' />
      <Container>
        <GreetingSection>
          <GreetingMessageContainer>
            <CSSTransition classNames='fade' in={true} appear timeout={3000}>
              <GreetingMessage>
                <h1>Hi,</h1>
                <Typist
                  className='Typist'
                  startDelay={500}
                  cursor={{
                    show: true,
                    element: ''
                  }}
                >
                  I'm Sid .B
                </Typist>
                <CSSTransition
                  classNames='fade'
                  in={true}
                  appear
                  timeout={5000}
                >
                  <h3>Frontend Engineer</h3>
                </CSSTransition>
              </GreetingMessage>
            </CSSTransition>
          </GreetingMessageContainer>
          <HeroImageContainer>
            <CSSTransition classNames='fade' in={true} appear timeout={3000}>
              {/* TODO: add alt */}
              <img src={require('../images/illustrations/working.png')} />
            </CSSTransition>
          </HeroImageContainer>
        </GreetingSection>
        <WhoAmISection id='who-am-i'>
          <h2>ABOUT ME</h2>
          <WhoAmIDescription>
            My name is <strong>Sid Bentifraouine</strong> and I'm a
            <strong> Frontend Engineer</strong>.<br /> I
            <strong> Design </strong>+<strong> Code</strong>:
            <strong> Web </strong>+<strong> Mobile </strong>
            Applications.
            <br />
            <br /> You need help with you <strong>React</strong>,
            <strong> React Native</strong> application ? Or <strong>UX</strong>{' '}
            & <strong>UI</strong> advices ?<LetsTalk>Let's Talk</LetsTalk>
          </WhoAmIDescription>
        </WhoAmISection>
        <SkillsSection id='my-skills'>
          <MyStory>
            {/* TODO: use div and p */}

            <h3>My Story</h3>
            <div>
              <p>
                <br />
                <br />
                I drew alot <br />
                first professional experience: i felt in love with web
                developpement with my first experience with angular
                <br />
                <br />
                I started watching online courses, reading books, since then,
                nothing has changed.
                <br />
                <br />
                Everyday of my life, i'm making sure that I'm alway up to date
                in order to be a game changer in my daily work and also on my
                side projects.
                <br />
                <br />
                Really rigourous with my daily routing, I'm alway improving my
                rituals, wake up early, learn, sport, work, repeat.
              </p>
            </div>
            <IllustrationImageContainer>
              <img
                src={require('../images/illustrations/reading.png')}
                alt="Low fidelity illustration of Sid while he is reading a 'React for Dummies' Book"
              />
            </IllustrationImageContainer>
            <p>
              first professional experience: i felt in love with web
              developpement with my first experience with angular
              <br />
              <br />
              I started watching online courses, reading books, since then,
              nothing has changed.
              <br />
              <br />
              Everyday of my life, i'm making sure that I'm alway up to date in
              order to be a game changer in my daily work and also on my side
              projects.
              <br />
              <br />
              Really rigourous with my daily routing, I'm alway improving my
              rituals, wake up early, learn, sport, work, repeat.
            </p>
          </MyStory>
          <WhatAreMySkills>
            {/* TODO: add alt */}
            <IllustrationImageContainer>
              <img
                src={require('../images/illustrations/cooking.png')}
                alt=''
              />
            </IllustrationImageContainer>
            <TechStackDesc>
              <p>I use only dope technologies</p>
              <p>I use only dope technologies</p>
              <p>I use only dope technologies</p>
              <p>I use only dope technologies</p>
              <p>I use only dope technologies</p>
            </TechStackDesc>
          </WhatAreMySkills>
        </SkillsSection>
        {/* 
          1. Skills 
          2. Education
          3. Hobbies
        */}
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    animation: float 6s ease-in-out infinite;
  }

  /* Animations */
  .fade-enter,
  .fade-appear {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-appear-active {
    opacity: 1;
    transition: opacity 3000ms;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`

const GreetingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1rem;
  @media screen {
  }
`
const GreetingMessageContainer = styled.div`
  margin: 2rem 0;
`
const GreetingMessage = styled.div`
  h1,
  .Typist {
    color: ${(props) => props.theme.black};
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1;
  }
  .Typist {
    color: ${(props) => props.theme.primary};
    margin-left: 0.5rem;
  }
  h3 {
    line-height: 0;
    color: ${(props) => props.theme.secondary};
  }
`
const HeroImageContainer = styled.div`
  width: 70%;
`

const WhoAmISection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  h2 {
    font-size: 1rem;
    color: ${(props) => props.theme.secondary};
  }
`

const WhoAmIDescription = styled.p`
  color: ${(props) => props.theme.dimGray};
  font-weight: 100;
  strong {
    color: ${(props) => props.theme.primary};
  }
`
const LetsTalk = styled.a`
  display: block;
  margin: 1rem 0;
  font-weight: bold;
  background-color: ${(props) => props.theme.secondary};
  width: 100px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.5rem 0.5rem;
`

const SkillsSection = styled.section``

const MyStory = styled.div`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  p {
  }
  img {
  }
`

const WhatAreMySkills = styled.div`
  padding: 6rem 0;
  display: flex;
`
const TechStackDesc = styled.div`
  width: 40%;
`
const IllustrationImageContainer = styled.div`
  width: 100%;
  img {
    height: auto;
    width: auto;
  }
`
