import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import NavbarHeader from "../components/NavbarHeader";
import Footer from "../components/Footer";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 2fr;
  grid-template-areas:
    "nav"
    "main"
    "footer";
  height: 100vh;
  width: fit-content;

  /* 48em = 768px */
  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 0.5fr 4fr 0.5fr;
    grid-template-areas:
      "nav nav nav nav nav nav"
      "main main main main main main"
      "footer footer footer footer footer footer";
    height: 100vh;
    width: auto;
  }
`;

const Layout = ({ children }) => (
  <>
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
    <Container>
      <NavbarHeader />
      {children}
      <Footer />
    </Container>
  </>
);

export default Layout;