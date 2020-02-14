/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled.section`
  grid-area: categories;
  height: 90%;
  width: 90%;
  padding: 1em;
  margin: 2em;

  display: flex;
  justify-content: center;
`;

export default () => {
  const cats = useStaticQuery(query);
  const categoryNodes = cats.allSanityCategory.nodes;
  console.log({ categoryNodes });
  return (
    <Container
      sx={{
        backgroundColor: "secondary"
      }}
    >
      <h1>store category filter</h1>
    </Container>
  );
};

export const query = graphql`
  query CategoriesQuery {
    allSanityCategory {
      nodes {
        title
        description
        id
        childrenCategories {
          title
          description
          id
        }
        categoryImage {
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
