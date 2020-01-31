/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react';
import styled from "@emotion/styled";
import PortableText from "@sanity/block-content-to-react";
import { graphql, useStaticQuery } from 'gatsby';

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

export default () => {
    const about = useStaticQuery(query);
    const info = about.allSanityAbout.nodes;
    console.log({info})
  return (
      <Outer sx={{
        border: '3px solid',
        borderColor: 'primary',
        padding: '2em',
        boxShadow: '-3px 3px #00001F'
      }}>
 <Container>
        {info.map((node, index) => (        
            <React.Fragment key={index}>
            <h1 sx={{
                fontFamily: "heading",
                letterSpacing: "text",
                fontWeight: "bold",
                color: "primary",
                marginBottom: '2em'
                }}>{node.title}</h1>
                <About sx={{
                fontFamily: "body",
                fontWeight: "body",
                color: "text",
                }}>
                <PortableText
                blocks={node._rawAboutUs}
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
          _rawAboutUs
          title
          slug {
            current
          }
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
