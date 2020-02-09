import React, { Fragment } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import Typist from 'react-typist'
import { Layout, SEO } from '../components'

export default function LandingPage() {
  return (
    <Fragment>
      <SEO title='Welcome !' />
      <Layout>
        <Container>
          <Section>
            <SectionDescription>
              <CSSTransition classNames='fade' in={true} appear timeout={3000}>
                <GreetingsMessage>
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
                </GreetingsMessage>
              </CSSTransition>
            </SectionDescription>
            <CSSTransition classNames='fade' in={true} appear timeout={3000}>
              <Image
                src={require('../images/illustrations/working.png')}
                alt='Low fidelity illustration of Sid as he is working on his desk and smiling.'
              />
            </CSSTransition>
          </Section>

          {/* My Job */}
          <Section id='my-job'>
            <SectionTitle>My Job</SectionTitle>
            <SectionDescription>
              <p>
                My name is <strong>Sid Bentifraouine</strong> and I'm a
                <strong> Frontend Engineer</strong>.
              </p>
              <p>
                I<strong> Design </strong>+<strong> Code</strong>:
                <strong> Web </strong>+<strong> Mobile </strong>
                Applications.
              </p>
              <p>
                You need help with you <strong>React</strong>,
                <strong> React Native</strong> application ? Or
                <strong> UX</strong> & <strong>UI</strong> advices ?
              </p>
              <LetsTalkLink>Let's Talk</LetsTalkLink>
            </SectionDescription>
          </Section>

          {/* Tech Stack Section */}
          <Section>
            <SectionTitle>Tech' Stack</SectionTitle>
            <Image
              src={require('../images/illustrations/cooking.png')}
              alt='Cooking an app with multiple technologies'
            />
            <SectionDescription>
              <p>I use only dope technologies</p>
            </SectionDescription>
          </Section>

          {/* About Me */}
          <Section id='about-me'>
            <SectionTitle>My Story</SectionTitle>
            <SectionDescription>
              <p>
                I drew alot first professional experience: i felt in love with
                web developpement with my first experience with angular
              </p>
              <p>
                I started watching online courses, reading books, since then,
                nothing has changed.
              </p>
              <p>
                Everyday of my life, i'm making sure that I'm alway up to date
                in order to be a game changer in my daily work and also on my
                side projects.
              </p>
              <p>
                Really rigourous with my daily routing, I'm alway improving my
                rituals, wake up early, learn, sport, work, repeat.
              </p>
            </SectionDescription>
            <Image
              src={require('../images/illustrations/reading.png')}
              alt="Low fidelity illustration of Sid while he is reading a 'React for Dummies' Book"
            />
            <SectionDescription>
              <p>
                first professional experience: i felt in love with web
                developpement with my first experience with angular
              </p>
              <p>
                I started watching online courses, reading books, since then,
                nothing has changed.
              </p>
              <p>
                Everyday of my life, i'm making sure that I'm alway up to date
                in order to be a game changer in my daily work and also on my
                side projects. Really rigourous with my daily routing, I'm alway
                improving my rituals, wake up early, learn, sport, work, repeat.
              </p>
            </SectionDescription>
          </Section>
        </Container>
      </Layout>
    </Fragment>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

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

const Image = styled.img`
  animation: float 6s ease-in-out infinite;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0.5rem;
`

const SectionTitle = styled.h3`
  margin: 1rem 0;
  color: ${(props) => props.theme.primary};
`

const SectionDescription = styled.p`
  color: ${(props) => props.theme.dimGray};
  font-weight: 100;
  strong {
    color: ${(props) => props.theme.primary};
  }
`

const GreetingsMessage = styled.div`
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

const LetsTalkLink = styled.a`
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
