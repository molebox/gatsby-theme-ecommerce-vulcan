import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query VulcanSiteMetaData {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
