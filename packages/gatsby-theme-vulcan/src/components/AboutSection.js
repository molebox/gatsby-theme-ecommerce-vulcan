/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import PortableText from "@sanity/block-content-to-react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import {
  Outer,
  Container,
  ImageContainer,
  TextContainer,
  serializers,
  Heading
} from "./common-page-elements/index";

export default () => {
  const about = useStaticQuery(query);
  const info = about.allSanityAbout.nodes;
  return (
    <Outer
      sx={{
        marginTop: "2em"
      }}
    >
      <Container>
        {info.map((node, index) => (
          <React.Fragment key={index}>
            <ImageContainer
              sx={{
                border: "solid 2px",
                borderColor: "primary",
                boxShadow: "-3px 3px #00001F"
              }}
            >
              <GatsbyImage
                fluid={node.images.asset.fluid}
                key={node.title + index}
                alt={node.title}
              />
            </ImageContainer>
            <Heading
              sx={{
                fontFamily: "heading",
                letterSpacing: "text",
                fontWeight: "bold",
                color: "primary",
                marginBottom: "1em",
                marginTop: "2em",
                display: "flex",
                alignSelf: "center",
                justifySelf: "center",
                borderBottom: "solid 2px",
                borderColor: "primary",
                padding: "0.5em"
              }}
            >
              {node.title}
            </Heading>
            <TextContainer
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
            </TextContainer>
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
