/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
// import Card from "./Card";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
// import { Link } from "gatsby";
import { useSiteMetadata } from "./useSiteMetadata";

// const ListContainer = styled.ul`
//   list-style: none;
//   margin: 2em;
//   display: grid;
//   grid-gap: 3em;
//   grid-auto-flow: dense;
//   grid-template-columns: 1fr 1fr;
//   justify-items: center;
//   width: auto;
//   height: auto;
//   justify-self: center;

//   @media (min-width: 700px) {
//     grid-template-columns: 1fr 1fr;
//   }

//   @media (min-width: 1280px) {
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   }
// `;

const Image = styled(GatsbyImage)`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

const Text = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);

  font-size: 1.5em;
  line-height: 40px;

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

export default () => {
  const home = useStaticQuery(query);
  const { tagline } = useSiteMetadata();
  const { images } = home.sanityHomePage;
  return (
    <>
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
    </>
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
  }
`;
