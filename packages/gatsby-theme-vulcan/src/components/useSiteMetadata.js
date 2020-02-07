import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query VulcanSiteMetaData {
        site {
          siteMetadata {
            siteName
            currencySymbol
            siteUrl
            hasBlog
            tagline
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
