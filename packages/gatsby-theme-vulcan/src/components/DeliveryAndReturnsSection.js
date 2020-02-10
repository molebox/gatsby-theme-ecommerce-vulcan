/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import PortableText from "@sanity/block-content-to-react";
import { graphql, useStaticQuery } from "gatsby";
import {
  Outer,
  Container,
  TextContainer,
  serializers
} from "./common-page-elements/index";

export default () => {
  const dnr = useStaticQuery(query);
  const info = dnr.allSanityDeliveryAndReturns.nodes;
  return (
    <Outer
      sx={{
        margin: "1em"
      }}
    >
      <Container>
        {info.map((node, index) => (
          <React.Fragment key={index}>
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
            <TextContainer
              sx={{
                fontFamily: "body",
                fontWeight: "body",
                color: "text",
                marginBottom: "2em"
              }}
            >
              <PortableText
                blocks={node._rawDeliveryReturns}
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
  query DeliveryAndReturnsQuery {
    allSanityDeliveryAndReturns {
      nodes {
        _rawDeliveryReturns(resolveReferences: { maxDepth: 10 })
        title
      }
    }
  }
`;
