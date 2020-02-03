module.exports = (options) => {
    const {siteName, siteUrl, sanity_project_id, sanity_dataset,snipcart_api_key, version, currencySymbol} = options;

    return {
        siteMetadata: {
          siteName,
          currencySymbol,
          siteUrl
        },

        plugins: [
          {
            resolve: 'gatsby-source-sanity',
            options: {
              projectId: sanity_project_id,
              dataset: sanity_dataset,
              watchMode: true
              // a token with read permissions is required
              // if you have a private dataset
              // token: process.env.MY_SANITY_TOKEN
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
            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp',
            'gatsby-plugin-emotion',
            'gatsby-plugin-theme-ui'
        ]
    }
}