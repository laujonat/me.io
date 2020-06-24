module.exports = {
  siteMetadata: {
    title: `jonathanlau.io`,
    subtitle: `Web Programmer. Maker of things.`,
    location: `Currently in Silicon Valley`,
    description: `Personal portfolio built on Gatsby`,
    author: `@laujonat`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "portal",
        id: "portal",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/pray-icon.png`, // This path is relative to the root of the site.
      },
    },
    `kute.js`,
    {
      resolve: `kute.js`,
      options: {
        pathToConfigModule: `src/components/box`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
  ],
}
