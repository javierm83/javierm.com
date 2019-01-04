module.exports = {
  siteMetadata: {
    title: 'Front-End Development, Javacript and User Experience in Auckland, New Zealand',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-sass', 
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: "posts",
      },
    },
  ],
};
