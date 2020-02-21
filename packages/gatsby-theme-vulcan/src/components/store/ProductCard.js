/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
import BuyButton from "../snipcart/BuyButton";
import GatsbyImage from "gatsby-image";
import PortableText from "@sanity/block-content-to-react";
import { useSiteMetadata } from "./../useSiteMetadata";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Inspiration: https://github.com/heyjordn/gatsby-slide-example/blob/master/src/components/slideshow.js

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
  height: auto;
  position: relative;
  min-width: 300px;
  width: 350px @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 2em;
    height: auto;
    position: relative;
    min-width: 300px;
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
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  `
      : null}
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1em minmax(150px, auto) 1em;
  align-items: center;
`;

const MainImageContainer = styled.div`
  width: 300px;
  max-width: 300px;
  min-width: 150px
  height: auto;
  justify-self: center;
  align-self: center;
  grid-column: 2;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2em;

  & > p {
    font-size: 2em;
  }
`;

const Price = styled.div`
  font-size: 2em;
`;

const PriceAndPurchase = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Description = styled.div`
  margin-bottom: 1em;

  & > p {
    font-size: 1.4em;
  }

  @media (min-width: 500px) {
    & > p {
      font-size: 1.3em;
    }
  }

  @media (min-width: 700px) {
    & > p {
      font-size: 1.3em;
    }
  }

  @media (min-width: 1280px) {
    & > p {
      font-size: 1.2em;
    }
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

export default ({
  title,
  description,
  blurb,
  price,
  thumbnails,
  itemId,
  size,
  fit,
  onSalePrice,
  carousel
}) => {
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
    <Container
      sx={{
        fontFamily: "heading"
      }}
      onSale={onSalePrice ? true : false}
    >
      {!!carousel ? (
        <ImageContainer>
          <div
            sx={{
              cursor: "crosshair",
              justifySelf: "center"
            }}
          >
            <FiChevronLeft size="1.5em" onClick={() => handlePrevious()} />
          </div>
          <MainImageContainer>
            <GatsbyImage fluid={asset.fluid} key={title + index} alt={title} />
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
      ) : (
        <MainImageContainer>
          <GatsbyImage fluid={asset.fluid} key={title + index} alt={title} />
        </MainImageContainer>
      )}
      <Info>
        <Header>
          <p
            sx={{
              fontFamily: "heading",
              letterSpacing: "body"
            }}
          >
            {title}
          </p>
        </Header>
        <Description>
          <PortableText blocks={description} serializers={serializers} />
        </Description>
        <PriceAndPurchase>
          {onSalePrice ? (
            <>
              <Price
                sx={{
                  fontFamily: "body",
                  fontWeight: "bold",
                  textDecoration: "line-through",
                  fontSize: "1em"
                }}
              >
                ${price}
              </Price>
              <Price
                sx={{
                  fontFamily: "body",
                  fontWeight: "bold"
                }}
              >
                ${onSalePrice}
              </Price>
            </>
          ) : (
            <Price
              sx={{
                fontFamily: "body",
                fontWeight: "bold"
              }}
            >
              ${price}
            </Price>
          )}

          <BuyButton
            key={title}
            text="add to cart"
            itemPrice={price}
            image={asset.fluid.src}
            itemTitle={title}
            itemDescription={blurb}
            pricesymbol={currencySymbol}
            itemId={itemId}
            itemUrl={siteUrl}
            itemPath="/store"
            isStackable={true}
            isTaxIncluded={true}
            data-item-custom1-name="Size"
            data-item-custom1-options={sizes}
          />
        </PriceAndPurchase>
      </Info>
    </Container>
  );
};
