/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
import BuyButton from "../snipcart/BuyButton";
import GatsbyImage from "gatsby-image";
import PortableText from "@sanity/block-content-to-react";

// Inspiration: https://github.com/heyjordn/gatsby-slide-example/blob/master/src/components/slideshow.js

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  height: auto;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ImageChangeButtons = styled.div`
  margin: 2em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  & button {
    text-transform: uppercase;
  }
`;

const MainImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: auto;
  justify-self: center;
  align-self: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Category = styled.div``;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h2``;

const Price = styled.div`
  font-size: 2em;
`;

const PriceAndPurchase = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Description = styled.p``;

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
  category,
  description,
  blurb,
  price,
  mainImage,
  thumbnails
}) => {
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
        <MainImageContainer
          sx={{
            border: "0.1em solid",
            borderColor: "primary"
          }}
        >
          <GatsbyImage fluid={asset.fluid} key={title + index} alt={title} />
        </MainImageContainer>
        <ImageChangeButtons>
          <button
            sx={{
              fontFamily: "heading",
              fontWeight: "heading",
              letterSpacing: "body",
              height: "3em",
              width: "10em",
              border: "0.1em solid",
              padding: "0.35em 1.2em",
              borderColor: "primary",
              backgroundColor: "primary",
              color: "accent",
              cursor: "crosshair",
              "&:hover": {
                color: "primary",
                backgroundColor: "accent",
                fontWeight: "bold",
                boxShadow: "-3px 3px #00001F"
              },
              "&:active": {
                boxShadow: "-3px 3px #00001F"
              }
            }}
            onClick={() => handlePrevious()}
          >
            Previous
          </button>
          <button
            sx={{
              fontFamily: "heading",
              fontWeight: "heading",
              letterSpacing: "body",
              height: "3em",
              width: "10em",
              border: "0.1em solid",
              padding: "0.35em 1.2em",
              borderColor: "primary",
              backgroundColor: "primary",
              color: "accent",
              cursor: "crosshair",
              "&:hover": {
                color: "primary",
                backgroundColor: "accent",
                fontWeight: "bold",
                boxShadow: "-3px 3px #00001F"
              },
              "&:active": {
                boxShadow: "-3px 3px #00001F"
              }
            }}
            onClick={() => handleNext()}
          >
            Next
          </button>
        </ImageChangeButtons>
      </ImageContainer>
      <Info>
        <Header>
          <Title
            sx={{
              fontFamily: "heading",
              letterSpacing: "body"
            }}
          >
            {title}
          </Title>
          <Category
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
          </Category>
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
            text="BUY NOW"
            itemPrice={price}
            image={mainImage}
            itemTitle={title}
            itemDescription={blurb}
          />
        </PriceAndPurchase>
      </Info>
    </Container>
  );
};
