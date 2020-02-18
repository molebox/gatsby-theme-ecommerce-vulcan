module.exports = (options) => {
  const {
    siteName,
    siteUrl,
    sanity_project_id,
    sanity_dataset,
    snipcart_api_key,
    version,
    currencySymbol,
    hasBlog,
    tagline
  } = options;

  return {
    siteMetadata: {
      siteName,
      currencySymbol,
      siteUrl,
      hasBlog,
      tagline
    },

    plugins: [{
        resolve: `gatsby-plugin-layout`,
        options: {
          component: require.resolve(`./src/layouts/index.js`),
        },
      },
      {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: sanity_project_id,
          dataset: sanity_dataset,
          watchMode: false
        }
      },
      {
        resolve: 'gatsby-plugin-google-fonts',
        options: {
          fonts: [
            'Muli',
            'Open Sans',
            'source sans pro\:300,400,400i,700'
          ]
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: `${__dirname}/src/pages/`
        }
      },
      {
        resolve: "@horacioh/gatsby-theme-instagram",
        options: {
          username: "guardianfashion",
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      'gatsby-plugin-emotion',
      'gatsby-plugin-theme-ui'
    ]
  }
}