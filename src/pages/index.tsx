import React, { Fragment } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import Typist from 'react-typist'
import { Layout, SEO } from '../components'

/* TODO: 
  1- add img alts
  2- remove WIP
*/
export default () => {
  return (
    <Fragment>
      <SEO title='Welcome !' />
      <Layout>
        <Container>
          <Section>
            <h1 style={{ color: 'red' }}>👷‍♂️ WORK IN PROGRESS 🔨</h1>
            <CSSTransition classNames='fade' in={true} appear timeout={3000}>
              <GreetingsContainer>
                <h1>Hi,</h1>
                <Typist
                  className='Typist'
                  startDelay={500}
                  cursor={{
                    show: true,
                    element: ''
                  }}
                >
                  I'm Sid
                </Typist>
                <CSSTransition
                  classNames='fade'
                  in={true}
                  appear
                  timeout={5000}
                >
                  <h3>Frontend Engineer</h3>
                </CSSTransition>
              </GreetingsContainer>
            </CSSTransition>
            <CSSTransition classNames='fade' in={true} appear timeout={3000}>
              <Image
                src={require('../images/illustrations/coding.svg')}
                alt=''
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

          <Section>
            <SectionTitle>Aliqua id</SectionTitle>
            <Image
              src={require('../images/illustrations/cooking.svg')}
              alt='Cooking an app with multiple technologies'
            />
            <SectionDescription>
              Reprehenderit est elit pariatur enim dolore adipisicing incididunt
              qui et. Elit nulla Lorem deserunt elit. Consequat pariatur dolore
              commodo minim nulla exercitation aute aute ad enim ad. Et id dolor
              eiusmod minim sit aliqua aute eu tempor.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Sit aliquip</SectionTitle>
            <SectionDescription>
              Ipsum aliquip culpa tempor anim sunt duis reprehenderit do officia
              cupidatat amet commodo. Adipisicing consequat est aliqua nostrud
              non. Nostrud veniam velit cupidatat ex. Officia aliqua esse minim
              anim. Incididunt pariatur cupidatat amet sit dolore id anim
              deserunt sit aliqua duis adipisicing.{' '}
            </SectionDescription>
            <Image
              src={require('../images/illustrations/reading.svg')}
              alt="Low fidelity illustration of Sid while he is reading a 'React for Dummies' Book"
            />
            <SectionDescription>
              Anim commodo proident veniam laboris laboris sint laborum commodo.
              Nisi eu labore nulla eu eu nulla eiusmod nisi aliquip
              exercitation. Est non dolore anim anim commodo mollit incididunt
              sunt mollit.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Eiusmod et qui</SectionTitle>
            <Image
              src={require('../images/illustrations/bjj.svg')}
              alt='Sid is doing some BJJ'
            />
            <SectionDescription>
              Consectetur nostrud magna ullamco labore in proident. Consectetur
              dolore anim ex cupidatat amet ea ea Lorem dolor veniam labore
              magna. Enim aliqua eiusmod proident ex duis dolore duis.
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

  @media all and (min-width: 768px) {
    padding: 0 20vw;
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
`

const GreetingsContainer = styled.div`
  margin: 5rem;
  h1,
  .Typist {
    color: ${(props) => props.theme.black};
    display: inline-block;
    font-size: 3rem;
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
    text-align: center;
  }
`

const Image = styled.img`
  @keyframes float {
    0% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-0.5rem);
    }
    100% {
      transform: translatey(0);
    }
  }
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
  strong {
    color: ${(props) => props.theme.primary};
  }
`

const LetsTalkLink = styled.a`
  display: block;
  margin: 1rem auto;
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
