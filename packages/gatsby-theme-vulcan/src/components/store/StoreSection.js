/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Card from "../Card";
import { graphql } from "gatsby";

const Container = styled.section`
  margin: 2em;
  display: grid;
  grid-gap: 2em;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const Category = styled.div``;

const Title = styled.h2``;

const ShortDescription = styled.p``;

const Description = styled.p``;



export default () => {
  return (
    <Container>

    </Container>
  );
};

export const query = graphql`
  query StoreSectionProductsQuery {
    allSanityProduct {
      nodes {
        _rawBody
        title
        categories {
          title
        }
        defaultProductVariant {
          sku
          price
          taxable
          title
          images {
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;
