module.exports = (options) => {
    const {} = options;

    return {
        siteMetadata: {

        },

        plugins: [
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
            'gatsby-plugin-emotion',
            'gatsby-plugin-theme-ui'
        ]
    }
}