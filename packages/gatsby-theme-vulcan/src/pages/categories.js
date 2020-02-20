/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import GatsbyImage from "gatsby-image";
import CategoryCard from "../components/store/CategoryCard";
import Main from "../components/Main";

const Container = styled.section`
  margin-top: 5em;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
  }
`;

export default ({ data }) => {
  const { nodes } = data.allSanityCategory;

  const rootCategories = nodes.filter(cat => cat.isRoot === true);
  return (
    <Main>
      <Container>
        {rootCategories.map((node, index) => (
          <Link key={node.title + index} to={`category/${node.slug.current}`}>
            <CategoryCard key={node.title + index} text={node.title}>
              <GatsbyImage
                fluid={node.categoryImage.asset.fluid}
                key={node.title + index}
                alt={node.title}
              />
            </CategoryCard>
          </Link>
        ))}
      </Container>
    </Main>
  );
};

export const query = graphql`
  query CategoriesQuery {
    allSanityCategory {
      nodes {
        title
        slug {
          current
        }
        isRoot
        description
        id
        categoryImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        products {
          title
          slug {
            current
          }
          blurb {
            en
          }
          defaultProductVariant {
            price
            onSalePrice
            taxable
            title
            thumbnails {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
