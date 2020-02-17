import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 2fr;
  grid-template-areas:
    "nav"
    "main"
    "footer";
  height: 100vh;
  width: 100vw;

  /* 48em = 768px */
  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 0.5fr 4fr 0.5fr;
    grid-template-areas:
      "nav nav nav nav nav nav"
      "main main main main main main"
      "footer footer footer footer footer footer";
  }
`;

const Layout = ({ children }) => (
  <Container>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          scroll-behavior: smooth;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          // overflow: hidden;
          // width: 100%;
          overflow-x: hidden;
        }
      `}
    />
    {children}
  </Container>
);

export default Layout;

