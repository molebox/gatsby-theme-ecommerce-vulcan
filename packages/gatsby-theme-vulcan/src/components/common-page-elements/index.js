import React from "react";
import styled from "@emotion/styled";

export const Outer = styled.div`
  margin-top: 5em;
  height: auto;

  @media (min-width: 1280px) {
    margin: 5em auto;
    max-width: 1200px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
`;

export const TextContainer = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1280px) {
    margin-top: 2em;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  justify-self: center;
  align-self: center;
  margin-top: 5em;

  @media (min-width: 1280px) {
    width: 100%;
    max-width: 1200px;
    height: auto;
    justify-self: center;
    align-self: center;
    margin: 0;
  }
`;

export const Text = styled.p`
  font-size: 0.8em;
  font-weight: 500;
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

export const Heading = styled.h1`
  font-size: 1.2em;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4em;

  @media (min-width: 500px) {
    font-size: 2em;
  }

  @media (min-width: 700px) {
    font-size: 2.8em;
  }

  @media (min-width: 1280px) {
    font-size: 2.8em;
    margin: 1em 0;
  }
`;

export const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h1":
          return <Heading>{props.children}</Heading>;
        default:
          return <Text>{props.children}</Text>;
      }
    }
  }
};

export const breakpoints = {
  xs: { min: 0, max: 360 },
  sm: { min: 361, max: 960 },
  md: { min: 961, max: 1400 },
  lg: { min: 1401, max: null }
};
