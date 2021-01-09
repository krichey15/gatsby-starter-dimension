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
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/Kr-small.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
