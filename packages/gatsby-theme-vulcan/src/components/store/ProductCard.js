/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
import BuyButton from "../snipcart/BuyButton";
import GatsbyImage from "gatsby-image";
import PortableText from "@sanity/block-content-to-react";
import { useSiteMetadata } from "./../useSiteMetadata";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Inspiration: https://github.com/heyjordn/gatsby-slide-example/blob/master/src/components/slideshow.js

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 2em;
  height: auto;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1em minmax(300px, auto) 1em;
  align-items: center;
`;

const MainImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: auto;
  justify-self: center;
  align-self: center;
  grid-column: 2;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2em;
`;

const Price = styled.div`
  font-size: 2em;
`;

const PriceAndPurchase = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 2em;
`;

const Size = styled.div`

`;

const Fit = styled.div`

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
  itemId
}) => {
  const { currencySymbol, siteUrl } = useSiteMetadata();
  const [index, setIndex] = React.useState(0);
  const length = thumbnails.length - 1;
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);
  const { asset } = thumbnails[index];

  return (
    <Container
      sx={{
        border: "3px solid",
        borderColor: "primary",
        padding: "2em",
        boxShadow: "-3px 3px #00001F"
      }}
    >
      <ImageContainer>
        <div sx={{
          cursor: 'crosshair',
          justifySelf: 'center'
        }}>
        <FiChevronLeft size="1.5em" onClick={() => handlePrevious()}/>
        </div>
        <MainImageContainer
          sx={{
            border: "0.1em solid",
            borderColor: "primary"
          }}
        >
          <GatsbyImage fluid={asset.fluid} key={title + index} alt={title} />
        </MainImageContainer>
        <div sx={{
          cursor: 'crosshair',
          justifySelf: 'center'
        }}>
        <FiChevronRight size="1.5em" onClick={() => handleNext()}/>
        </div>
      </ImageContainer>
      <Info>
        <Header>
          <h2
            sx={{
              fontFamily: "heading",
              letterSpacing: "body"
            }}
          >
            {title}
          </h2>
          {/* <Category
            sx={{
              fontFamily: "heading",
              fontWeight: "bold",
              border: "3px solid",
              borderColor: "primary",
              padding: "1em",
              letterSpacing: "body"
            }}
          >
            {category}
          </Category> */}
        </Header>
        <Description>
          <PortableText blocks={description} serializers={serializers} />
        </Description>
        <PriceAndPurchase>
          <Price
            sx={{
              fontFamily: "body",
              fontWeight: "bold"
            }}
          >
            ${price}
          </Price>

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
          />
        </PriceAndPurchase>
      </Info>
    </Container>
  );
};
