import React, { FC } from 'react'
import Link from '../components/BigLink'

import styled from 'styled-components'
import {
  FaGithub,
  FaLinkedin,
  FaLink,
  FaAddressCard,
  FaEnvelope,
  FaTwitter,
  FaCar
} from 'react-icons/fa'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const Resume: FC = () => {
  return (
    <Layout>
      <SEO title='Resume' keywords={['cv', 'resume']} />
      <Container>
        <Link to='/'>Go Back</Link>
        <Header>
          <img src={require('../images/resume-picture.jpg')} alt='logo' />
          <h2>{resume.intro.name}</h2>
          <h3>{resume.intro.job}</h3>
          <hr />
        </Header>
        <Content>
          <Sidebar>
            <ul>
              {resume.intro.links.map(({ label, url, hrefPrefix, icon }) => (
                <li key={url}>
                  {icon}
                  {hrefPrefix ? (
                    <a href={`${hrefPrefix}:${url}`}>{label}</a>
                  ) : (
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                      {label}
                    </a>
                  )}
                </li>
              ))}
              <li>
                {resume.intro.address.icon}
                <a
                  href={resume.intro.address.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {resume.intro.address.zipCode && (
                    <>
                      {resume.intro.address.zipCode}
                      <br />
                    </>
                  )}
                  {resume.intro.address.city}, {resume.intro.address.country}
                </a>
              </li>
              <li>
                <FaCar />
                <p>Permis B</p>
              </li>
            </ul>
          </Sidebar>
          <AboutMe>
            <Section>
              <h3>Profil</h3>
              <p>{resume.intro.pitch}</p>
            </Section>
            <Section>
              <h3>Expériences Professionnelles</h3>
              {resume.experience.map(
                ({
                  company,
                  title,
                  location: { city, country },
                  data: { from, to },
                  description,
                  projectExamples
                }) => (
                  <div key={company}>
                    <h4>
                      {title} chez {company}, {city}, {country} — {from}-{to}
                    </h4>
                    <p>{description}</p>
                    <h5>Exemples de projets</h5>
                    {projectExamples.map(
                      ({
                        title: projectTitle,
                        summary,
                        actions,
                        techStack
                      }) => (
                        <div key={projectTitle}>
                          <h5>{projectTitle}</h5>
                          <p>{summary}</p>
                          <ul>
                            {actions.map((actionName) => (
                              <li key={actionName}>{actionName}</li>
                            ))}
                          </ul>
                          <p>
                            {techStack.map((techName, index) => (
                              <span key={techName}>
                                {techName}
                                {index !== techStack.length - 1 && ' | '}
                              </span>
                            ))}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )
              )}
            </Section>
            <Education>
              <h3>Formation</h3>
              {resume.education.map(
                ({
                  school,
                  location: { city, country },
                  year,
                  degree,
                  distiction
                }) => (
                  <div key={year}>
                    <h4>
                      {school}, {city}, {country} — {year}
                    </h4>
                    <h4>{degree}</h4>
                    <h5>{distiction}</h5>
                  </div>
                )
              )}
            </Education>
            <Abilities>
              <h3>Compétences</h3>
              {resume.abilities.map(({ domain, skills }) => (
                <div key={domain}>
                  <h4>{domain}</h4>
                  <p>
                    {skills.map(({ label, level }: any, index: number) => (
                      <span key={label}>
                        {label}
                        {level && ` (${level})`}
                        {index !== skills.length - 1 ? `, ` : '.'}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </Abilities>
            <Hobbies>
              <h3>Loisirs</h3>
              <p>
                Volontariat avec l’association "Aide aux Orphelins", Dessin
                & peinture (Imagination), Piano (Autodidacte), Football (Travail
                d’équipe et Leadership), Randonnée (Aventure), Pêche (Patience),
                Cyclisme (Persévérance)
              </p>
            </Hobbies>
          </AboutMe>
        </Content>
      </Container>
    </Layout>
  )
}

export default Resume

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 0;
  & > a {
    align-self: flex-start;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    width: 10rem;
    height: 0.1rem;
    background-color: ${({ theme: { blue } }) => blue};
    margin-bottom: 1rem;
  }
  img {
    border-radius: 50%;
    width: 7rem;
  }

  h2 {
    text-transform: uppercase;
    color: ${({ theme: { blue } }) => blue};
  }
  h3 {
    text-transform: uppercase;
  }
`

const Content = styled.div`
  display: flex;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`
const Sidebar = styled.div`
  width: 30vw;
  font-size: 0.8rem;
  ul {
    list-style: none;
    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      a {
        margin-left: 0.7rem;
        text-decoration: none;
        color: ${({ theme: { black } }) => black};
        font-weight: 600;
      }
      p {
        margin-left: 0.7rem;
      }
    }
  }
`
const AboutMe = styled.div`
  width: 70vw;
  padding: 1rem;
`

const Section = styled.div`
  margin-top: 2rem;
  li {
    margin: 0;
  }
`

const Education = styled.div`
  margin-top: 2rem;
  ul {
    list-style: none;
    padding: 0;
  }
  div {
    h4 {
      margin-bottom: 0.7rem;
    }
    h4:nth-of-type(2) {
      color: ${({ theme: { dimGray } }) => dimGray};
      font-weight: 600;
    }
  }
`

const Abilities = styled.div`
  h4 {
    color: ${({ theme: { blue } }) => blue};
  }
`
const Hobbies = styled.div``

const resume: {
  intro: any
  experience: any[]
  education: any[]
  abilities: any[]
} = {
  intro: {
    name: 'Sid Bentifraouine',
    job: 'Ingénieur Frontend',
    links: [
      {
        hrefPrefix: 'mailto',
        label: 'sidbentifraouine@gmail.com',
        url: 'sidbentifraouine@gmail.com',
        icon: <FaEnvelope />
      },
      {
        label: 'www.sidbentifraouine.com',
        url: 'https://www.sidbentifraouine.com',
        icon: <FaLink />
      },
      {
        label: 'sidbentifraouine',
        url: 'https://www.linkedin.com/in/sidbentifraouine/',
        icon: <FaLinkedin />
      },
      {
        label: 'sidbentifraouine',
        url: 'https://github.com/sidbentifraouine',
        icon: <FaGithub />
      },
      {
        label: 'sbentifraouine',
        url: 'https://twitter.com/sbentifraouine',
        icon: <FaTwitter />
      }
    ],
    address: {
      city: 'Lille',
      country: 'France',
      url: 'https://www.google.com/maps/place/Lille/@50.6310622,3.0120553',
      icon: <FaAddressCard />
    },
    pitch:
      "Je design et m'occupe de la conception et ingénierie de votre solution Web et Native."
  },
  experience: [
    {
      company: 'NoConsulting',
      title: 'Ingénieur Frontend',
      location: { city: 'Lille', country: 'France' },
      description:
        'J’ai travaillé sur plusieurs projets en “Agilité/Scrum“ en tant que développeur Frontend et encadreur technique sur du React, React Native, Vue et Angular.',
      data: { from: 2017, to: 2019 },
      projectExamples: [
        {
          title: 'HNL (Heart Never Lies) — Développeur Frontend',
          summary:
            'HNL est une société proposant une solution de marketing émotionnel. L’outil est composé de capteurs spécifiques, reliés à une application Web/Desktop. Dans un souci de portabilité, NoConsulting est intervenue dans la création d’une application mobile permettant la mesure.',
          actions: [
            'Chiffrage projet',
            'Mise en place des environnements pour la partie mobile',
            'Conception et implémentation'
          ],
          techStack: [
            'Ionic',
            'Cordova',
            'Capacitor',
            'Angular',
            'JavaScript',
            'TypeScript',
            'Git',
            'JIRA',
            'Agile(Scrum)'
          ]
        },
        {
          title: 'Nauticoncept — Développeur Frontend',
          summary: (
            <>
              La société Nauticoncept est un acteur du marché du nautisme. Le
              métier historique est de proposer un système de “boîte noire”
              permettant de recueillir toutes les informations des bateaux
              équipés.
              <br />
              Nauticoncept est également dotée d’une plateforme de gestion de
              bateau (maintenance, tracking…). Les besoins des clients ont amené
              Nauticoncept à opter pour la refonte de l’outil ainsi qu’à ajouter
              de nombreuses fonctionnalités (planification, réservation…). J'ai
              donc pu intervenir sur les deux parties de leur projet:
              maintenance de la version 1 (React), puis sa refonte (Angular).
            </>
          ),
          actions: [
            'Correction de bugs',
            'Assainissement du code source',
            'Chiffrage du projet',
            'Mise en place des environnements',
            'Conception et implémentation',
            'Revue de code'
          ],
          techStack: [
            'React',
            'Angular',
            'JavaScript',
            'TypeScript',
            'Git',
            'JIRA',
            'Agile(Scrum)'
          ]
        }
      ]
    }
  ],
  education: [
    {
      school: 'Université Polytechnique des Hauts-de-France',
      location: { city: 'Valenciennes', country: 'France' },
      year: 2019,
      degree:
        "Master Informatique parcours Technologies Nouvelles des Systèmes d'Information",
      distiction: 'Mention Bien'
    },
    {
      school: 'Université Polytechnique des Hauts-de-France',
      location: { city: 'Valenciennes', country: 'France' },
      year: 2017,
      degree: 'Licence Informatique',
      distiction: 'Mention Assez Bien'
    },
    {
      school: 'Université des Sciences et de la Technologie Houari-Boumédiène',
      location: { city: 'Alger', country: 'Algérie' },
      year: 2016,
      degree: 'Licence Informatique',
      distiction: 'Major de Promotion'
    }
  ],
  abilities: [
    {
      domain: 'Langues parlées',
      skills: [
        { label: 'Kabyle', level: 'langue maternelle' },
        { label: 'Arabe', level: 'courant' },
        { label: 'Français', level: 'courant/DELF B2' },
        { label: 'Anglais', level: 'courant/TOIEC: 845' }
      ]
    },
    {
      domain: 'Méthodologie',
      skills: [{ label: 'Agile/Scrum' }, { label: 'Modélisation: UML, Merise' }]
    },
    {
      domain: 'Design',
      skills: [{ label: 'Sketch' }, { label: 'Zeplin' }, { label: 'Figma' }]
    },
    {
      domain: 'Frontend',
      skills: [
        { label: 'HTML' },
        { label: 'CSS' },
        { label: 'JavaScript' },
        { label: 'React' },
        { label: 'React Native' },
        { label: 'Next(SSR)' },
        { label: 'Redux' },
        { label: 'Apollo' },
        { label: 'Jest' },
        { label: 'Vue' },
        { label: 'Nuxt(SSR)' },
        { label: 'Angular' },
        { label: 'Ionic' },
        { label: 'Storybook' }
      ]
    },
    {
      domain: 'Backend',
      skills: [
        { label: 'Node' },
        { label: 'Express' },
        { label: 'API: RESTful, GraphQL' },
        { label: 'Prisma' },
        { label: 'MySQL' },
        { label: 'PostgreSQL' }
      ]
    },
    {
      domain: 'Outillage',
      skills: [{ label: 'Webpack' }, { label: 'Parcel' }, { label: 'Git' }]
    }
  ]
}
