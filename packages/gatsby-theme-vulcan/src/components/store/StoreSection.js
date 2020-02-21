/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import ProductCard from "./ProductCard";

const Container = styled.section`
  margin: 2em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr;

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
    grid-template-columns: 1fr 1fr;
  }
`;

export default () => {
  const products = useStaticQuery(query);
  const info = products.allSanityProduct.nodes;

  return (
    <Container>
      {info.map((node, index) => {
        return (
          <ProductCard
            itemId={node.id}
            key={index + node.title}
            title={node.title}
            description={node._rawBody.en}
            thumbnails={node.defaultProductVariant.thumbnails}
            price={node.defaultProductVariant.price}
            blurb={node.blurb.en}
            size={node.defaultProductVariant.size}
            fit={node.defaultProductVariant.fits}
            onSalePrice={node.defaultProductVariant.onSalePrice}
          />
        );
      })}
    </Container>
  );
};

export const query = graphql`
  query StoreSectionProductsQuery {
    allSanityProduct {
      nodes {
        _rawBody(resolveReferences: { maxDepth: 10 })
        title
        defaultProductVariant {
          sku
          price
          onSalePrice
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
          fits {
            title
          }
          size {
            title
          }
        }
        blurb {
          en
        }
      }
    }
  }
`;
