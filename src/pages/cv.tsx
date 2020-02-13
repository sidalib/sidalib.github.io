import React, { ReactElement } from 'react'
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
import { Layout, SEO } from '../components'
import Link from '../components/BigLink'

export default function ResumePage(): ReactElement {
  return (
    <Layout>
      <SEO title='CV' keywords={['cv', 'resume']} />
      <Container>
        {/* <Link to='/'>Go Back</Link> */}
        <Header>
          {/* <img src={require('../images/resume-picture.jpg')} alt='logo' /> */}
          <h1>{resume.intro.name}</h1>
          <h3>{resume.intro.job}</h3>
          <a href='https://www.sidbentifraouine.com/' target='_blank'>
            sidbentifraouine.com
          </a>
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
              <hr />
              <h3>Expériences Professionnelles</h3>
              {resume.experience.map(
                ({
                  company,
                  title,
                  location: { city, country },
                  data: { from, to },
                  description,
                  projectExamples,
                  linker
                }) => (
                  <div key={company}>
                    <h4>
                      {title} {linker ? "à l'" : 'chez'} {company}, {city},{' '}
                      {country} — {from}-{to}
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
                          <h4>{projectTitle}</h4>
                          <p>{summary}</p>
                          <h4>Actions</h4>
                          <ul>
                            {actions.map((actionName) => (
                              <li key={actionName}>{actionName}</li>
                            ))}
                          </ul>
                          <p>
                            {techStack.map((techName, index) => (
                              <span
                                style={{ fontSize: '.7rem' }}
                                key={techName}
                              >
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
            <hr />
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
            <hr />
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
            <hr />
            <Hobbies>
              <h3>Loisirs</h3>
              <p>
                Jiu Jitsu Brésilien, Judo, Football, Randonnée, Cyclisme,
                Dessin, Volontariat avec l’association "Aide aux Orphelins",
                Meetups et BBLs
              </p>
            </Hobbies>
          </AboutMe>
        </Content>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 1rem;
  margin: 0;

  hr {
    background-color: ${({ theme: { secondary } }) => secondary};
    width: 50%;
    margin: 1rem 0;
  }
  p {
    font-size: 0.9rem;
  }
  & > a {
    align-self: flex-start;
  }
  h3 {
    line-height: 1;
    color: ${({ theme: { lightGray } }) => lightGray};
  }
  h4 {
    line-height: 1;
  }
  h5 {
    line-height: 1;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    width: 10rem;
    height: 0.1rem;
    background-color: ${({ theme: { secondary } }) => secondary};
    margin-bottom: 1rem;
  }
  img {
    border-radius: 50%;
    width: 7rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme: { lightGray } }) => lightGray};
  }
  h1 {
    text-transform: uppercase;
    color: ${({ theme: { secondary } }) => secondary};
  }
  h3 {
    text-transform: uppercase;
    color: ${({ theme: { primary } }) => primary};
  }
`

const Content = styled.div`
  display: flex;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`
const Sidebar = styled.div`
  width: 25vw;
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
        color: ${({ theme: { primary } }) => primary};
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
      color: ${({ theme: { secondary } }) => secondary};
      font-weight: 600;
    }
  }
`

const Abilities = styled.div`
  h4 {
    color: ${({ theme: { lightGray } }) => lightGray};
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
      // {
      //   hrefPrefix: 'mailto',
      //   label: 'sidbentifraouine@gmail.com',
      //   url: 'sidbentifraouine@gmail.com',
      //   icon: <FaEnvelope />
      // },
      // {
      //   label: 'www.sidbentifraouine.com',
      //   url: 'https://www.sidbentifraouine.com',
      //   icon: <FaLink />
      // }
      // {
      //   label: 'sidbentifraouine',
      //   url: 'https://www.linkedin.com/in/sidbentifraouine/',
      //   icon: <FaLinkedin />
      // },
      // {
      //   label: 'sidbentifraouine',
      //   url: 'https://github.com/sidbentifraouine',
      //   icon: <FaGithub />
      // },
      // {
      //   label: 'sbentifraouine',
      //   url: 'https://twitter.com/sbentifraouine',
      //   icon: <FaTwitter />
      // }
    ],
    address: {
      city: 'Lille',
      country: 'France',
      url: 'https://www.google.com/maps/place/Lille/@50.6310622,3.0120553',
      icon: <FaAddressCard />
    },
    pitch:
      "À l'aide d'outils dopés, associés a un dur labeur, je m'occupe du design et du développement de votre solution Web et Native."
  },
  experience: [
    {
      company: 'Université polytechnique des Hauts-de-France',
      linker: 'à',
      title: 'Professeur',
      location: { city: 'Valenciennes', country: 'France' },
      description: '',
      data: { from: 2019, to: "Ajourd'hui" },
      projectExamples: [
        {
          title:
            "Cours de développement d'applications mobiles - Master 2 TNSI",
          summary:
            'Au sein de ce cours, les étudiants ont pu apprendre a développer une application mobile (iOS & Android) en utilisant les dernières technologies Cross-platform: React Native, Flutter, Ionic.',
          actions: [
            'Cours Magistral sur les généralités du développement Cross-platform',
            'Introduction à React Native, Flutter, Ionic',
            'Préparation du projet final, ainsi que les mockups interactifs avec Figma'
          ],
          techStack: [
            'React',
            'JavaScript',
            'TypeScript',
            'Dart',
            'Flutter',
            'Ionic',
            'Figma'
          ]
        }
      ]
    },

    {
      company: 'Wiidii',
      title: 'Ingénieur Frontend',
      location: { city: 'Lille', country: 'France' },
      description:
        "Wiidii est un client final ayant pour but la création d'une nouvelle génération d’assistant digital qui révolutionne l’expérience client. Doté d'un aspect hybride, les demandes des clients sont résolues soit par l'IA, soit par un opérateur humain.",
      data: { from: 2019, to: "aujourd'hui" },
      projectExamples: [
        {
          title: 'Application Wiidii (Android & iOS)',
          summary:
            "Interface permettant aux utilisateurs finaux d'avoir accès a tout un panel de services comprenant la possiblité de chatter avec leur assistant et d'organiser leur quotidien.",
          actions: ['Développement des nouvelles features', 'TMA', 'Audit UX'],
          techStack: [
            'React Native',
            'JavaScript',
            'TypeScript',
            'Git',
            'JIRA',
            'Agile(Scrum)'
          ]
        },
        {
          title: 'Dashboard opérateur humain',
          summary:
            "Dashboard permettant aux opérateurs humains de satisfaire les besoins de chaque utilisateur ainsi que leur gestion. Cet outil couvrent les aspects: chat, planifications, gestions de lots d'utilisateurs",
          actions: ['Développement des nouvelles features', 'TMA', 'Audit UX'],
          techStack: [
            'React',
            'JavaScript',
            'TypeScript',
            'Git',
            'JIRA',
            'Agile(Scrum)'
          ]
        },
        {
          title: 'Mise en places des bonnes pratiques React',
          summary:
            "Dans un souci de qualité, il fallait centraliser les connaissances et les bonnes pratiques à respecter pour les projets existants ainsi que ce à venir. Le but était de créer un template projet React couvrant tous les besoins de chaque développeur par anticipation ceci va du boilerplate initial, le format des reducers et des sagas Redux jusqu'aux outils de tests d'intégration.",
          actions: [
            'Mise en place du template',
            'Bonnes pratiques Redux & Redux Saga',
            'Tests e2e avec Cypress',
            'Authentification avec OIDC',
            'Réflexion, concertation, documentation des bonnes pratiques'
          ],
          techStack: [
            'React',
            'JavaScript',
            'TypeScript',
            'Git',
            'JIRA',
            'Agile(Scrum)'
          ]
        }
      ]
    },
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
        },
        {
          title: 'NoConsulting - Mentoring',
          summary:
            "J'ai la croyance au fait que le partage constant de connaissances est une des meilleures manières de donner à notre communauté. J'ai pu donc partager tout ce que j'apprends pendant ma veille technologique.",
          actions: [
            'Faire monter en compétence un apprenti sur les aspects metiers et techniques du monde Frontend',
            'Meetup - les PWA',
            'BBL - GraphQL avec React/Apollo & Express/GraphQL Yoga',
            'BBL - Introduction à React'
          ],
          techStack: [
            'React',
            'Vue',
            'Express',
            'GraphQL',
            'Apollo',
            'GraphQL Yoga',
            'Prossive Web Apps'
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
        { label: 'Kabyle', level: 'courant' },
        { label: 'Arabe', level: 'courant' },
        { label: 'Français', level: 'courant' },
        { label: 'Anglais', level: 'courant/TOIEC: 845' }
      ]
    },
    {
      domain: 'Méthodologie & conception',
      skills: [{ label: 'Agile/Scrum' }, { label: 'JIRA' }, { label: 'UML' }]
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
        { label: 'TypeScript' },
        { label: 'React' },
        { label: 'React Native' },
        { label: 'Next (SSR)' },
        { label: 'Gatsby (Static)' },
        { label: 'Redux' },
        { label: 'Apollo' },
        { label: 'Jest' },
        { label: 'Cypress' },
        { label: 'Vue' },
        { label: 'Nuxt (SSR)' },
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
        { label: 'GraphQL Yoga' },
        { label: 'Prisma' },
        { label: 'MySQL' },
        { label: 'PostgreSQL' },
        { label: 'Firebase' }
      ]
    },
    {
      domain: 'Outillage',
      skills: [{ label: 'Webpack' }, { label: 'Parcel' }, { label: 'Git' }]
    }
  ]
}
