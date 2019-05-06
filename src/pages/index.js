import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `Sid`,
        `Ali`,
        `Bentifraouine`,
        `Lille`,
        `France`,
      ]}
    />
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <p>Still working on this site... 🔨</p>
      <h1>Hi people I'm Sid Ali and I love coding</h1>
      <p>
        A Frontend Engineer who loves learning and share new things with love
        👨‍💻❤️
      </p>
      <div style={{ maxWidth: `600px`, display: "grid", margin: "0 auto" }}>
        <Image />
      </div>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
