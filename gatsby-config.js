const pkg = require('./package')

module.exports = {
  siteMetadata: {
    title: 'Cryptocurrency Talks',
    description: pkg.description,
    siteUrl: pkg.homepage,
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `talk`,
        path: `${__dirname}/data/talk`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // TODO: Add analytics tracking id
        trackingId: `UA-00000000-0`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `speaker`,
        path: `${__dirname}/asset/speaker/`,
      },
    },
    `gatsby-transformer-json`,
  ],
}
