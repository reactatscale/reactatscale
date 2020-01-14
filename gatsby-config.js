module.exports = {
  siteMetadata: {
    title: `React At Scale`,
    description: `React At Scale`,
    author: `Joshua Hall`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-purgecss',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          'gatsby-remark-images',
          `gatsby-remark-prismjs`
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'services',
        path: `${__dirname}/content/services`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/assets`
      }
    },
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        plugins: [
          "gatsby-tinacms-git",
          "gatsby-tinacms-remark",
        ],
        sidebar: {
          position: 'fixed',
          hidden: process.env.PRODUCTION === "true"
        }
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      }
    }
  ],
}
