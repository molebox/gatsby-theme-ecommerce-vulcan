/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import Card from "../components/Card";
import Main from "../components/Main";
import GatsbyImage from "gatsby-image";
import { useSiteMetadata } from "../components/useSiteMetadata";
import { Heading } from "../components/common-page-elements";

const Container = styled.section`
  margin: 0 auto;
`;

const ListContainer = styled.ul`
  list-style: none;
  margin: 5em auto;
  display: grid;
  grid-gap: 3em;
  grid-auto-flow: dense;
  grid-template-columns: 1fr;
  justify-items: center;
  width: auto;
  height: auto;
  justify-self: center;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const ProductInfo = styled.div`
  z-index: 1000;
  font-size: 1.5em;
  height: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Price = styled.div`
  font-size: 1em;

  @media (min-width: 1280px) {
    font-size: 1em;
  }
`;

const OnSalePrice = styled.div`
  font-size: 0.8em;

  @media (min-width: 1280px) {
    font-size: 0.5em;
  }
`;

export default ({ data }) => {
  console.log("data: ", data.sanityCategory);
  const { products, title } = data.sanityCategory;
  const { currencySymbol } = useSiteMetadata();

  return (
    <Main>
      <Container>
        <Heading
          sx={{
            fontFamily: "heading",
            letterSpacing: "text",
            fontWeight: "bold",
            color: "primary",
            marginBottom: "1em",
            display: "flex",
            alignSelf: "center",
            justifySelf: "center",
            borderBottom: "solid 2px",
            borderColor: "primary",
            padding: "0.5em"
          }}
        >
          {title}
        </Heading>
        <ListContainer>
          {products.map((node, index) => (
            <li
              sx={{
                border: "solid 2px",
                borderColor: "primary",
                boxShadow: "-3px 3px #00001F",
                textDecoration: "none"
              }}
              key={index}
            >
              <Link to={`products/${node.slug.current}`}>
                <Card text="SHOP">
                  <GatsbyImage
                    fluid={node.defaultProductVariant.thumbnails[0].asset.fluid}
                    alt={node.defaultProductVariant.title}
                  />
                </Card>
              </Link>
              <ProductInfo
                sx={{
                  fontFamily: "heading",
                  borderTop: "3px solid",
                  borderColor: "primary",
                  textDecoration: "none"
                }}
              >
                <p>{node.defaultProductVariant.title}</p>
                {node.defaultProductVariant.onSalePrice ? (
                  <PriceContainer>
                    <OnSalePrice
                      sx={{
                        fontFamily: "body",
                        fontWeight: "bold",
                        textDecoration: "line-through"
                      }}
                    >
                      {currencySymbol}
                      {node.defaultProductVariant.price}
                    </OnSalePrice>
                    <Price
                      sx={{
                        fontFamily: "body",
                        fontWeight: "bold"
                      }}
                    >
                      {currencySymbol}
                      {node.defaultProductVariant.onSalePrice}
                    </Price>
                  </PriceContainer>
                ) : (
                  <Price
                    sx={{
                      fontFamily: "body",
                      fontWeight: "bold"
                    }}
                  >
                    {currencySymbol}
                    {node.defaultProductVariant.price}
                  </Price>
                )}
              </ProductInfo>
            </li>
          ))}
        </ListContainer>
      </Container>
    </Main>
  );
};

export const query = graphql`
  query CategoryQuery($slug: String!) {
    sanityCategory(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      isRoot
      description
      id
      products {
        blurb {
          en
        }
        defaultProductVariant {
          onSalePrice
          price
          taxable
          title
          thumbnails {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        title
        slug {
          current
        }
      }
    }
  }
`;
