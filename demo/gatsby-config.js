let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const activeSiteUrl = activeEnv === "development" ? "http://localhost:8000" : "https://gatsby-theme-vulcan.netlify.com/";

module.exports = {
    plugins: [
        {
            resolve: 'gatsby-theme-vulcan', 
            options: {
                sanity_project_id: process.env.SANITY_PROJECT_ID,
                sanity_dataset: process.env.SANITY_PROJECT_DATASET,
                siteName: 'VULCAN',
                snipcart_api_key: process.env.SNIPCART_APIKEY,
                version: 'v3',
                currencySymbol: '$',
                siteUrl: activeSiteUrl,
                hasBlog: false,
                tagline: 'STYLE IS A WAY TO SAY WHO YOU ARE WITHOUT HAVING TO SPEAK'
            }
        }
    ]
}