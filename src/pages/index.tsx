import React, { Fragment } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import Typist from 'react-typist'
import { Layout, SEO } from '../components'

/* TODO: 
  - add img alts
  - remove WIP
*/
export default () => {
  return (
    <Fragment>
      <SEO title='Welcome !' />
      <Layout>
        <Container>
          <Section>
            <h1 style={{ color: 'red' }}>👷‍♂️ WORK IN PROGRESS 🔨</h1>
            <div className='Hero'>
              <CSSTransition classNames='fade' in={true} appear timeout={3000}>
                <GreetingsContainer>
                  <h1>Hi, I'm Sid</h1>
                  {/* <Typist
                    className='Typist'
                    startDelay={500}
                    cursor={{
                      show: true,
                      element: ''
                    }}
                  >
                    I'm Sid
                  </Typist> */}
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
            </div>
          </Section>

          <Content>
            <Section id='intro'>
              <SectionTitle>Who am I ?</SectionTitle>
              <SectionDescription style={{ textAlign: 'center' }}>
                My name is <strong>Sid Bentifraouine</strong> and I'm a
                <strong> Frontend Engineer</strong>
                <br /> I<strong> Design </strong>+<strong> Code</strong>:
                <strong> Web </strong>+<strong> Mobile </strong>
                Applications.
              </SectionDescription>
            </Section>

            <Section>
              <SectionTitle>My tools</SectionTitle>
              <SectionDescription>
                <h4>Methodology</h4>
                <p>Scrum !!! That's all..</p>
              </SectionDescription>
              <SectionDescription>
                <h4>Design</h4>
                <p>
                  I worked with Sketch combined with Abstract, Zeplin...etc...
                  then I discovered Figma two years ago, and I stuck to it. This
                  tool is just an all in one, including a real-time multiplayer
                  mode! How can I ask more? For my inspirations, I read from de
                  best, people like Adam Wathan & Steve Shcoger, Sara Soueidan.
                </p>
              </SectionDescription>

              <div className='SideBySide'>
                <Image
                  src={require('../images/illustrations/cooking.svg')}
                  alt='Cooking an app with multiple technologies'
                />
                <SectionDescription>
                  It's easy to be convinced when you see all those giants using
                  it. <br /> So the day a better tool comes, I'll be switching,
                  till then I'm sticking it with an open-minded view to any
                  better alternative for my and your needs.
                </SectionDescription>
              </div>
            </Section>

            <Section>
              <SectionTitle>Sit aliquip</SectionTitle>
              <SectionDescription>
                Ipsum aliquip culpa tempor anim sunt duis reprehenderit do
                officia cupidatat amet commodo. Adipisicing consequat est aliqua
                nostrud non. Nostrud veniam velit cupidatat ex. Officia aliqua
                esse minim anim. Incididunt pariatur cupidatat amet sit dolore
                id anim deserunt sit aliqua duis adipisicing.
              </SectionDescription>
              <div className='SideBySide'>
                <SectionDescription>
                  Anim commodo proident veniam laboris laboris sint laborum
                  commodo. Nisi eu labore nulla eu eu nulla eiusmod nisi aliquip
                  exercitation. Est non dolore anim anim commodo mollit
                  incididunt sunt mollit.
                </SectionDescription>
                <Image
                  src={require('../images/illustrations/reading.svg')}
                  alt="Low fidelity illustration of Sid while he is reading a 'React for Dummies' Book"
                />
              </div>
            </Section>

            <Section>
              <SectionTitle>Eiusmod et qui</SectionTitle>
              <SectionDescription>
                Consectetur nostrud magna ullamco labore in proident.
                Consectetur dolore anim ex cupidatat amet ea ea Lorem dolor
                veniam labore magna. Enim aliqua eiusmod proident ex duis dolore
                duis.
              </SectionDescription>
              <div className='SideBySide'>
                <Image
                  src={require('../images/illustrations/bjj.svg')}
                  alt='Sid is doing some BJJ'
                />
                <SectionDescription>
                  Consectetur nostrud magna ullamco labore in proident.
                  Consectetur dolore anim ex cupidatat amet ea ea Lorem dolor
                  veniam labore magna. Enim aliqua eiusmod proident ex duis
                  dolore duis.
                </SectionDescription>
              </div>
            </Section>
            <Section>
              <SectionDescription>
                You need help with you <strong>React</strong>,
                <strong> React Native</strong> application ? Or
                <strong> UX</strong> & <strong>UI</strong> advices ?
              </SectionDescription>

              <LetsTalkLink href='mailto:sidbentifraouine@gmail.com?subject=Hi there 🖖!'>
                Let's Talk
              </LetsTalkLink>
            </Section>
          </Content>
        </Container>
      </Layout>
    </Fragment>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media all and (min-width: 768px) {
    padding: 0 10vw;
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

const Content = styled.div`
  @media all and (min-width: 768px) {
    padding: 0 10vw;
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
  .Hero {
    @media all and (min-width: 768px) {
      display: grid;
      grid-template-columns: 2fr 3fr;
      grid-column-gap: 1rem;
      justify-items: center;
      align-items: center;
    }
  }
  .SideBySide {
    @media all and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 1rem;
      justify-items: center;
    }
  }
`

const SectionTitle = styled.h3`
  margin: 2rem 0;
  color: ${(props) => props.theme.primary};
`

const SectionDescription = styled.div`
  color: ${(props) => props.theme.dimGray};
  strong {
    color: ${(props) => props.theme.primary};
  }
`

const LetsTalkLink = styled.a`
  display: block;
  margin: 1rem auto;
  width: 100px;
  padding: 0.5rem 0.5rem;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.white};
  text-decoration: none;
  font-weight: bold;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0 3px ${(props) => props.theme.primary};
  transition: all 0.1s ease-in-out;
  :hover {
    cursor: pointer;
  }
  :active {
    transform: translateY(3px);
    box-shadow: 0 0;
  }
`
