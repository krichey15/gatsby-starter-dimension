module.exports = {
  siteMetadata: {
    title: 'Kyle Richey Full-Stack JS Dev',
    author: 'kyle@kyle-richey.com',
    description: 'Portfolio Website for Kyle Richey',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: 'linear-gradient(to right, #40E0D0 0, #40E0D0 33%, #FF8C00 33%, #FF8C00 66%, #FF0080 66%, #FF0080 100%);',
        theme_color: 'linear-gradient(to right, #40E0D0 0, #40E0D0 33%, #FF8C00 33%, #FF8C00 66%, #FF0080 66%, #FF0080 100%);',
        display: 'minimal-ui',
        icon: 'src/images/kr-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
