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
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5em;
  }
`;

export default ({ data }) => {
  const { nodes } = data.allSanityBaseCategory;
  console.log({ nodes });
  return (
    <Main>
      <Container>
        {nodes.map((node, index) => (
          <Link key={node.title + index} to={`collection/${node.slug.current}`}>
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
    allSanityBaseCategory {
      nodes {
        title
        slug {
          current
        }
        description
        id
        categoryImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
