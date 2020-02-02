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
        <GreetingSectionContainer>
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
              <img src={require('../images/imcoding.png')} />
            </CSSTransition>
          </HeroImageContainer>
        </GreetingSectionContainer>
        <MyJobSectionContainer>
          {/* <JobTitle>Frontend Engineer</JobTitle> */}
          <JobDesc>
            My name is <strong>Sid Bentifraouine</strong> and I'm a
            <strong> Frontend Engineer</strong>.<br /> I
            <strong> Design </strong>+<strong> Code</strong>:
            <strong> Web </strong>+<strong> Mobile </strong>
            Applications.
            <br />
            <br /> You need help with you React, React Native. Or UX/UI advices
            ?<JobLetsTalk>Let's Talk</JobLetsTalk>
          </JobDesc>
        </MyJobSectionContainer>
        {/* <Link to='/resume'>
          <span>
            <FaBriefcase />
            <span style={{ paddingLeft: '.5rem' }}>Hire Me</span>
          </span>
        </Link>
        <Link to='/decks'>
          <span>
            <FaTv />
            <span style={{ paddingLeft: '.5rem' }}>Presentations</span>
          </span>
        </Link> */}
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

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

const GreetingSectionContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 0rem 1rem;
`
const GreetingMessageContainer = styled.div`
  width: 30%;
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
  animation: float 6s ease-in-out infinite;
`

const MyJobSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`

const JobTitle = styled.h2`
  width: 30%;
`
const JobDesc = styled.p`
  width: 60%;
  line-height: 2;
  color: ${(props) => props.theme.dimGray};
  font-weight: 100;
  strong {
    color: ${(props) => props.theme.primary};
  }
`
const JobLetsTalk = styled.a`
  display: block;
  margin: 1rem 0;
  font-weight: bold;
  background-color: ${(props) => props.theme.secondary};
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius};
`
