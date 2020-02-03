/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import ProductCard from "./ProductCard";
import { useStaticQuery } from "gatsby";

const Container = styled.section`
  margin: 2em;
  display: grid;
  grid-gap: 2em;
  width: 100%;
  grid-template-columns: 1fr 1fr;

  grid-auto-rows: auto;
  justify-self: center;
  justify-items: center;
  width: auto;

  @media (min-width: 500px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default () => {
  const products = useStaticQuery(query);
  const info = products.allSanityProduct.nodes;
  return (
    <Container>
      {info.map((node, index) => (
        <ProductCard
          key={index + node.title}
          title={node.title}
          category={node.categories[0].title}
          description={node._rawBody.en}
          mainImage={node.defaultProductVariant.mainImage[0].asset.fluid}
          thumbnails={node.defaultProductVariant.thumbnails}
          price={node.defaultProductVariant.price}
          blurb={node.blurb.en}
        />
      ))}
    </Container>
  );
};

export const query = graphql`
  query StoreSectionProductsQuery {
    allSanityProduct {
      nodes {
        _rawBody(resolveReferences: { maxDepth: 10 })
        title
        categories {
          title
        }
        defaultProductVariant {
          sku
          price
          taxable
          title
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          thumbnails {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        blurb {
          en
        }
      }
    }
  }
`;
