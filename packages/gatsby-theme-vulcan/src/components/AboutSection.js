/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
import PortableText from "@sanity/block-content-to-react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";

const Outer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`;

const About = styled.div`
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: auto;
  justify-self: center;
  align-self: center;
`;

const Text = styled.p`
  font-size: 1.5em;
  padding-bottom: 0.5em;

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
          return <Text>{props.children}</Text>;
      }
    }
  }
};

export default () => {
  const about = useStaticQuery(query);
  const info = about.allSanityAbout.nodes;
  return (
    <Outer
      sx={{
        border: "2px solid",
        borderColor: "primary",
        padding: "2em",
        boxShadow: "-3px 3px #00001F"
      }}
    >
      <Container>
        {info.map((node, index) => (
          <React.Fragment key={index}>
            <ImageContainer
              sx={{
                border: "2px solid",
                borderColor: "primary"
              }}
            >
              <GatsbyImage
                fluid={node.images.asset.fluid}
                key={node.title + index}
                alt={node.title}
              />
            </ImageContainer>
            <h1
              sx={{
                fontFamily: "heading",
                letterSpacing: "text",
                fontWeight: "bold",
                color: "primary",
                marginBottom: "1em",
                display: "flex",
                alignSelf: "center",
                justifySelf: "center",
                margin: "1em",
                borderBottom: "solid 2px",
                borderColor: "primary",
                padding: "0.5em"
              }}
            >
              {node.title}
            </h1>
            <About
              sx={{
                fontFamily: "body",
                fontWeight: "body",
                color: "text",
                marginBottom: "2em"
              }}
            >
              <PortableText
                blocks={node._rawAboutUs}
                serializers={serializers}
              />
            </About>
          </React.Fragment>
        ))}
      </Container>
    </Outer>
  );
};

export const query = graphql`
  query AboutQuery {
    allSanityAbout {
      nodes {
        _rawAboutUs(resolveReferences: { maxDepth: 10 })
        title
        images {
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
