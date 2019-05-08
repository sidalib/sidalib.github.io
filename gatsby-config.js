module.exports = {
  siteMetadata: {
    title: `Sid Bentifraouine Website`,
    description: `Get to know me better with this website`,
    author: `sidbentifraouine@gmail.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sid-bentifraouine-website`,
        short_name: `sid`,
        start_url: `/`,
        background_color: `#6B212F`,
        theme_color: `#6B212F`,
        display: `minimal-ui`,
        icon: `src/images/sid-logo.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito']
        }
      }
    }
  ]
}
