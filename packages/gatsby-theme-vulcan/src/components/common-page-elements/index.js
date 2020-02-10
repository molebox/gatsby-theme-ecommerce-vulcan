import React from "react";
import styled from "@emotion/styled";

export const Outer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`;

export const TextContainer = styled.div`
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: auto;
  justify-self: center;
  align-self: center;
`;

export const Text = styled.p`
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

export const Heading = styled.h2`
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

export const serializers = {
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
