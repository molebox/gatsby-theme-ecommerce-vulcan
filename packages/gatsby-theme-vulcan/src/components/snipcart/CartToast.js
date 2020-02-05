/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react';
import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default () => {
  return (
    <Container>
      <p sx={{
        fontFamily: 'heading'
      }}>Total Cost: </p>
      <span sx={{
        fontFamily: 'heading'
      }} className="snipcart-total-price"></span>
      <p sx={{
        fontFamily: 'heading'
      }}>Number of Items: </p>
      <span className="snipcart-items-count"></span>
    </Container>
  );
};
