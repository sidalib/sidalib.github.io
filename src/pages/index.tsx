import React, { Fragment } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import Typist from 'react-typist'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
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
            <h3 style={{ color: 'red' }}>👷‍♂️ WORK IN PROGRESS 🔨</h3>
            <div className='Hero'>
              {/* <CSSTransition classNames='fade' in={true} appear timeout={3000}> */}
              <GreetingsContainer>
                <h1>Hi, I'm Sid</h1>
                <h3>Frontend Engineer</h3>
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
                {/* <CSSTransition
                    classNames='fade'
                    in={true}
                    appear
                    timeout={5000}
                  > */}
                {/* </CSSTransition> */}
              </GreetingsContainer>
              {/* </CSSTransition> */}
              {/* <CSSTransition classNames='fade' in={true} appear timeout={3000}> */}
              {/* <StaticQuery
                query={graphql`
                  query {
                    placeholderImage: file(
                      relativePath: { eq: "sid-the-builder.png" }
                    ) {
                      childImageSharp {
                        fluid(maxWidth: 600) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                `}
                render={(data) => (
                  <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                )}
              /> */}
              <Image
                src={require('../images/illustrations/coding.svg')}
                alt=''
              />
              {/* </CSSTransition> */}
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

            <Section id='tools'>
              <SectionTitle>My tools</SectionTitle>
              <SectionDescription>
                <SectionSubtitle>Methodology</SectionSubtitle>
                <p>
                  I believe that <strong>Scrum</strong> is the most efficient
                  working framework, in fact, this is how people naturally work
                  since the dawn of time.
                </p>
                <p>
                  You can read{' '}
                  <a
                    href='https://www.goodreads.com/book/show/19288230-scrum'
                    target='_blank'
                  >
                    this excellent
                  </a>{' '}
                  book written by <strong>Jeff Sutherland</strong>, the creator
                  of Scrum himself if you're not convinced about it, but I'm
                  sure you already do.
                </p>
              </SectionDescription>
              <SectionDescription>
                <SectionSubtitle>Design</SectionSubtitle>
                <p>
                  I worked with <strong>Sketch</strong> combined with Abstract,
                  Zeplin.
                </p>
                <p>
                  Two years ago, I discovered <strong>Figma</strong>, and I fell
                  in love with it. It works just like Sketch but with less money
                  spending. This tool is an all in one, including a real-time
                  multiplayer mode! How can we ask for more? It makes my design
                  workflow easy and fast and lets me create sharable design
                  systems across my works.
                </p>
                <p>
                  For my inspirations, I read from people like
                  <strong> Adam Wathan</strong> & <strong>Steve Shcoger</strong>
                  ,<strong> Sara Soueidan</strong>.
                </p>
              </SectionDescription>

              <div className='SideBySide'>
                <Image
                  src={require('../images/illustrations/cooking.svg')}
                  alt='Cooking an app with multiple technologies'
                />
                <SectionDescription>
                  <SectionSubtitle>Frontend</SectionSubtitle>
                  <p>
                    When it comes to implementation,
                    <strong> React</strong> is my primary tool. It solves all my
                    problems better than any other tool. And it does the same
                    for the enormous needs of companies like Facebook,
                    Instagram, Netflix, Airbnb, Microsoft.
                  </p>
                  <p
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <p>
                      I'm always aiming to be up-to-date, my mind is always
                      opened to any better alternative to my current tools, for
                      exemple: I'm betting on <strong>Flutter</strong> for 2020.
                    </p>
                    <ul style={{ textAlign: 'left' }}>
                      <li>
                        For Server-Side Rendering: I use
                        <strong> Next.js</strong>
                      </li>
                      <li>
                        For Static Websites: I use <strong>Gatsby</strong>
                      </li>
                      <li>
                        For Native...<strong> React Native!</strong>
                      </li>
                    </ul>
                  </p>
                </SectionDescription>

                <SectionDescription>
                  <SectionSubtitle>Backend</SectionSubtitle>
                  <p>
                    I worked with
                    <strong>Ruby on Rails</strong>, which was a pure pleasure to
                    work with.
                  </p>
                  <p>
                    Today I'm sticking with <strong>Node/Express</strong>, it
                    covers the majority of use cases I work on. Combining it
                    with <strong>GraphQL Yoga & Prisma</strong>, which works
                    like a charm with my Frontend Integration with
                    <strong> Apollo</strong>.
                  </p>
                </SectionDescription>
              </div>
            </Section>

            <Section>
              <SectionTitle>My learning process</SectionTitle>
              <SectionDescription>
                <p>
                  To be <strong>efficient</strong>: The main idea is to always
                  be <strong>up to date</strong> with the latest language, good
                  practices, patterns, and framework, and this requires to put
                  hard work on the table. Here is my routine:
                </p>
                <p>
                  Up at <strong>5:00 AM</strong>, hitting cardio by
                  <strong> 5:10 AM</strong>, then completing my morning routines
                  at
                  <strong> 6 AM </strong>
                  by reading articles and watching courses.
                </p>
                <p>
                  I'm like a sponge near the materials of my favorite
                  instructors: <strong>Kent C. Dodds</strong>,
                  <strong> Dan Abramov</strong>, and
                  <strong> Kyle Simpson</strong> and Wes Bos.
                </p>
              </SectionDescription>
              <div className='SideBySide'>
                <p>
                  Also, I watch a lot of Video courses from{' '}
                  <strong>Egghead</strong> and <strong>Frontend Masters</strong>
                  , those materials aren't cheap. Still, I believe in the fact
                  that investing 1/3 of my money in learning will forever be the
                  best investment that I can do.
                </p>
                <Image
                  src={require('../images/illustrations/reading.svg')}
                  alt="Low fidelity illustration of Sid while he is reading a 'React for Dummies' Book"
                />
              </div>
            </Section>

            <Section id='me'>
              <SectionTitle>More About Me</SectionTitle>
              <SectionDescription>
                <p>
                  Besides my primary job as a{' '}
                  <strong> Frontend Engineer</strong>, I'm also a{' '}
                  <strong>Teacher</strong> at the{' '}
                  <strong>Polytechnic University of Hauts-de-France</strong>.
                </p>
                <p>
                  The course is aimed for <strong>Master 2 Students</strong>,
                  and I speak about <strong>Mobile Developpement</strong> with
                  Cross-platform frameworks like React Native, Flutter, Ionic.
                </p>
                <p>
                  This is so rewarding and joyful to share the things that I
                  know with others. When I find the time, I enjoy animating
                  <strong> workshops</strong> and <strong>meetups</strong>, I
                  believe that sharing knowledge is an excellent way to give
                  something back to the community.
                </p>
              </SectionDescription>
              <div className='SideBySide'>
                <Image
                  src={require('../images/illustrations/bjj.svg')}
                  alt='Sid is doing some BJJ'
                />
                <SectionDescription>
                  <p>
                    Also, I <strong>love sport</strong>, I practice
                    <strong> Yoga</strong> which is part of my morning routine,
                    <strong> Brazilian Jiu Jitsu</strong>, and
                    <strong> Judo</strong>. I also enjoy{' '}
                    <strong>Hiking.</strong>
                  </p>
                </SectionDescription>
              </div>
            </Section>
            <Section id='contact'>
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
    padding: 0 2rem;
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
  padding: 1rem;
  @media all and (min-width: 768px) {
    padding: 0 3rem;
  }
  @media all and (min-width: 1068px) {
    padding: 0 10rem;
  }
`

const GreetingsContainer = styled.div`
  margin: 5rem;
  h1,
  .Typist {
    color: ${(props) => props.theme.black};
    /* display: inline-block; */
    font-size: 3rem;
    font-weight: bold;
    line-height: 1;
  }
  .Typist {
    color: ${(props) => props.theme.primary};
    margin-left: 0.5rem;
  }
  h3 {
    color: ${(props) => props.theme.secondary};
    text-align: center;
    @media all and (min-width: 768px) {
      text-align: left;
    }
  }
`

const Image = styled.img`
  width: 100%;
  @keyframes float {
    0% {
      transform: translatey(0);
    }
    50% {
      /* transform: translatey(-0.5rem); */
      transform: translatey(0rem);
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
  padding: 8rem 0.5rem 0rem;
  .Hero {
    @media all and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 2fr;
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
  margin: 0 0 2rem;
  color: ${(props) => props.theme.primary};
  text-align: center;
  line-height: 0;
  text-transform: uppercase;

  @media all and (min-width: 768px) {
    text-align: left;
  }
`
const SectionSubtitle = styled.h4`
  text-align: center;
  color: ${({ theme: { lightGray } }) => lightGray};
  text-transform: uppercase;
  @media all and (min-width: 768px) {
    text-align: left;
  }
`

const SectionDescription = styled.div`
  text-align: center;
  line-height: 1.8;
  color: ${(props) => props.theme.dimGray};
  strong {
    color: ${(props) => props.theme.primary};
  }
  @media all and (min-width: 768px) {
    text-align: left;
  }
`

const LetsTalkLink = styled.a`
  display: block;
  margin: 1rem auto;
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
