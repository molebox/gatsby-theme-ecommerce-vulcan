/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
import BuyButton from "../components/snipcart/BuyButton";
import GatsbyImage from "gatsby-image";
import PortableText from "@sanity/block-content-to-react";
import { useSiteMetadata } from "../components/useSiteMetadata";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

// Inspiration: https://github.com/heyjordn/gatsby-slide-example/blob/master/src/components/slideshow.js

const Container = styled.div`
  //   display: grid;
  //   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  //   grid-auto-rows: auto;
  //   grid-gap: 2em;

  display: grid;
  grid-template-columns: 1frr;
  grid-gap: 2em;
  align-items: center;
  height: auto;
  position: relative;

  max-width: 1400px;
  margin: 2em auto;

  @media (min-width: 500px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 2fr;
  }

  ${props =>
    props.onSale
      ? `
    &::before {
      content: 'SALE';
      width: 2em;
      height: 6em;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
      writing-mode: vertical-rl;
      text-orientation: upright;
      background-color: black;
      color: white;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      top: 0;
    }
  `
      : null}
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5em minmax(300px, 1200px) 1.5em;
  align-items: center;
  height: min-content;
  width: 500px;
`;

const MainImageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  grid-column: 2;
  object-fit: contain;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
`;

const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 2em;
`;

const Price = styled.div`
  font-size: 2.5em;

  @media (min-width: 1280px) {
    font-size: 1.7em;
  }
`;

const OnSalePrice = styled.div`
  font-size: 1.7em;
  margin-right: 1em;

  @media (min-width: 1280px) {
    font-size: 1em;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  // justify-content: space-evenly;
  // align-items: center;
  // width: 10em;
  margin-top: 1em;
`;

const Description = styled.div`
  font-size: 1.5em;
  margin-bottom: 1em;

  @media (min-width: 500px) {
    font-size: 1.2em;
  }

  @media (min-width: 700px) {
    font-size: 1.2em;
  }

  @media (min-width: 1280px) {
    font-size: 1.2em;
  }
`;

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h1":
          return <h1>{props.children}</h1>;
        default:
          return (
            <p sx={{ paddingBottom: "0.5em", fontFamily: "body" }}>
              {props.children}
            </p>
          );
      }
    }
  }
};

export default ({ data }) => {
  const {
    slug,
    blurb,
    title,
    id,
    _rawBody,
    defaultProductVariant
  } = data.sanityProduct;
  const {
    // sku,
    price,
    onSalePrice,
    // fits,
    taxable,
    size,
    // mainImage,
    thumbnails
  } = defaultProductVariant;

  const { currencySymbol, siteUrl } = useSiteMetadata();
  const [index, setIndex] = React.useState(0);
  const length = thumbnails.length - 1;
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);
  const { asset } = thumbnails[index];

  const sizes = size
    .map(productSize => {
      return `${productSize.title}|`;
    })
    .join("")
    .toString();

  return (
    <Layout>
      <Header />
      <Main>
        <Container
          sx={{
            border: "solid 2px",
            borderColor: "primary",
            boxShadow: "-3px 3px #00001F",
            padding: "2em",
            fontFamily: "heading"
          }}
          onSale={onSalePrice ? true : false}
        >
          <ImageContainer>
            <div
              sx={{
                cursor: "crosshair",
                justifySelf: "center"
              }}
            >
              <FiChevronLeft size="1.5em" onClick={() => handlePrevious()} />
            </div>
            <MainImageContainer
            // sx={{
            //   border: "2px solid",
            //   borderColor: "primary"
            // }}
            >
              <GatsbyImage
                fluid={asset.fluid}
                key={title + index}
                alt={title}
              />
            </MainImageContainer>
            <div
              sx={{
                cursor: "crosshair",
                justifySelf: "center"
              }}
            >
              <FiChevronRight size="1.5em" onClick={() => handleNext()} />
            </div>
          </ImageContainer>
          <Info>
            <ProductHeader>
              <h2
                sx={{
                  fontFamily: "heading",
                  letterSpacing: "body",
                  borderBottom: "solid 2px",
                  borderColor: "primary",
                  paddingBottom: "0.5em",
                  width: "50%"
                }}
              >
                {title}
              </h2>
              <PriceContainer>
                {onSalePrice ? (
                  <>
                    <OnSalePrice
                      sx={{
                        fontFamily: "body",
                        fontWeight: "bold",
                        textDecoration: "line-through"
                      }}
                    >
                      {currencySymbol}
                      {price}
                    </OnSalePrice>
                    <Price
                      sx={{
                        fontFamily: "body",
                        fontWeight: "bold"
                      }}
                    >
                      {currencySymbol}
                      {onSalePrice}
                    </Price>
                  </>
                ) : (
                  <Price
                    sx={{
                      fontFamily: "body",
                      fontWeight: "bold"
                    }}
                  >
                    {currencySymbol}
                    {price}
                  </Price>
                )}
              </PriceContainer>
            </ProductHeader>
            <Description>
              <PortableText blocks={_rawBody.en} serializers={serializers} />
            </Description>
            <BuyButton
              key={title}
              text="add to cart"
              itemPrice={price}
              image={asset.fluid.src}
              itemTitle={title}
              itemDescription={blurb.en}
              pricesymbol={currencySymbol}
              itemId={id}
              itemUrl={siteUrl}
              itemPath={`/${slug.current}`}
              isStackable={true}
              isTaxIncluded={taxable ? true : false}
              data-item-custom1-name="Size"
              data-item-custom1-options={sizes}
            />
          </Info>
        </Container>
      </Main>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query StoreQuery($slug: String!) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      _rawBody(resolveReferences: { maxDepth: 10 })
      blurb {
        en
      }
      slug {
        current
      }
      title
      id
      defaultProductVariant {
        sku
        price
        onSalePrice
        fits {
          title
        }
        taxable
        size {
          title
        }
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
    }
  }
`;
