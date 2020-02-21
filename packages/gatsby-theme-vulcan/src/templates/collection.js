/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import Card from "../components/Card";
import Checkbox from "../components/Checkbox";
import Main from "../components/Main";
import GatsbyImage from "gatsby-image";
import { useSiteMetadata } from "../components/useSiteMetadata";
import { Heading } from "../components/common-page-elements";
import CategoryNav from "../components/CategoryNav";

const Container = styled.section`
  margin: 0 auto;
  max-width: 1200px;
`;

const ListContainer = styled.ul`
  list-style: none;
  margin: 2em auto;
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
    margin: 5em auto;
  }
`;

const ProductInfo = styled.div`
  z-index: 1000;
  font-size: 1.5em;
  height: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  width: 50%;
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
  console.log("data: ", data.sanityBaseCategory);
  const { products, title, categories } = data.sanityBaseCategory;

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
            justifySelf: "center"
          }}
        >
          {title}
        </Heading>
        <CategoryNav catNodes={categories} />
        <ListContainer>
          {products.map((node, index) => (
            <li
              sx={{
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
                  // borderTop: "3px solid",
                  // borderColor: "primary",
                  textDecoration: "none"
                }}
              >
                <p>{node.defaultProductVariant.title}</p>
                {node.defaultProductVariant.onSalePrice ? (
                  <PriceContainer>
                    <OnSalePrice
                      sx={{
                        fontFamily: "body",
                        fontWeight: "400",
                        textDecoration: "line-through",
                        color: "secondaryDarker"
                      }}
                    >
                      {currencySymbol}
                      {node.defaultProductVariant.price}
                    </OnSalePrice>
                    <Price
                      sx={{
                        fontFamily: "body",
                        fontWeight: "400"
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
                      fontWeight: "400"
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
  query CollectionQuery($slug: String!) {
    sanityBaseCategory(slug: { current: { eq: $slug } }) {
      title
      categories {
        slug {
          current
        }
        title
      }
      slug {
        current
      }
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
