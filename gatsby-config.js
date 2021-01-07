module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://ashiksimon.me/`,
    description: `Ashik's Portfolio`,
    author: `@ashiksimon`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145326769-2",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    "gatsby-plugin-cname",
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-robots-txt',
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
        name: `ashiksimon-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#c7d8ed`,
        theme_color: `#c7d8ed`,
        icon: "src/images/icon.png", 
        crossOrigin: `use-credentials`,
        icon: `src/images/android-chrome-512x512.png`, 
      },
    },
  ],
}
