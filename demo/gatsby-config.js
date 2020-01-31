let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
    plugins: [
        {
            resolve: 'gatsby-theme-vulcan', 
            options: {
                sanity_project_id: process.env.SANITY_PROJECT_ID,
                sanity_dataset: process.env.SANITY_PROJECT_DATASET
            }
        }
    ]
}