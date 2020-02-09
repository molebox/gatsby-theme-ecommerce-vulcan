/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
// import Card from "./Card";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
// import { Link } from "gatsby";
import { useSiteMetadata } from "./useSiteMetadata";
import { Grid } from "@horacioh/gatsby-theme-instagram";
import ProductCard from "./store/ProductCard";

const Heading = styled.h3`
  font-size: 1.5em;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em;

  @media (min-width: 500px) {
    font-size: 2em;
  }

  @media (min-width: 700px) {
    font-size: 2.8em;
  }

  @media (min-width: 1280px) {
    font-size: 2.8em;
  }
`;

const Container = styled.div`
  min-height: 900px;
`;

const Image = styled(GatsbyImage)`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 3em;
`;

const Text = styled.h2`
  position: absolute;
  top: 45%;
  left: 40%;
  transform: translate(-50%, -50%);

  font-size: 1.5em;
  line-height: 35px;

  @media (min-width: 500px) {
    font-size: 2em;
    line-height: 80px;
  }

  @media (min-width: 700px) {
    font-size: 3em;
    line-height: 90px;
  }

  @media (min-width: 1280px) {
    font-size: 3.5em;
    line-height: 130px;
    align-self: baseline;

    position: absolute;
    top: 60%;
    left: 20%;
    right: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Showcase = styled.section`
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  // grid-auto-rows: auto;
  // grid-gap: 2em;

  margin: 2em;
  display: grid;
  grid-gap: 2em;
  width: auto;
  grid-template-columns: 1fr;

  grid-auto-rows: auto;
  justify-self: center;
  justify-items: center;

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

// const ImageContainer = styled.div`
//   width: 100%;
//   max-width: 300px;
//   height: auto;
//   justify-self: center;
//   align-self: center;
// `;

export default () => {
  const home = useStaticQuery(query);
  const showcaseImages = home.sanityShowcase.products;
  console.log({ home });
  console.log({ showcaseImages });
  const { tagline } = useSiteMetadata();
  const { images } = home.sanityHomePage;
  return (
    <Container>
      <Image
        sx={{
          border: "solid 2px",
          borderColor: "primary",
          boxShadow: "-3px 3px #00001F"
        }}
        fluid={images[0].asset.fluid}
        key="get a key"
        alt="add alt here"
      />
      <Text
        sx={{
          fontFamily: "heading",
          letterSpacing: "text",
          fontWeight: "heading",
          color: "primary",
          textTransform: "uppercase"
        }}
      >
        {tagline}
      </Text>
      <Heading
        sx={{
          fontFamily: "heading",
          letterSpacing: "text",
          fontWeight: "heading",
          textTransform: "uppercase",
          borderBottom: "solid 2px",
          borderColor: "primary",
          padding: "0.5em"
        }}
      >
        Showcase
      </Heading>
      <Showcase>
        {showcaseImages.map((node, index) => (
          <ProductCard
            itemId={node.id}
            key={index + node.title}
            title={node.title}
            // category={node.categories[0].title}
            description={node._rawBody.en}
            thumbnails={node.defaultProductVariant.thumbnails}
            price={node.defaultProductVariant.price}
            blurb={node.blurb.en}
            size={node.defaultProductVariant.size}
            onSalePrice={node.defaultProductVariant.onSalePrice}
          />
        ))}
      </Showcase>
      <Heading
        sx={{
          fontFamily: "heading",
          letterSpacing: "text",
          fontWeight: "heading",
          textTransform: "uppercase",
          borderBottom: "solid 2px",
          borderColor: "primary",
          padding: "0.5em"
        }}
      >
        Instagram
      </Heading>
      <div
        sx={{
          padding: "1em"
        }}
      >
        <Grid />
      </div>
    </Container>
  );
};

export const query = graphql`
  query HomePageImageQuery {
    sanityHomePage {
      images {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    sanityShowcase {
      title
      products {
        _rawBody(resolveReferences: { maxDepth: 10 })
        blurb {
          en
        }
        id
        defaultProductVariant {
          title
          price
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
          size {
            title
          }
        }
      }
    }
  }
`;
