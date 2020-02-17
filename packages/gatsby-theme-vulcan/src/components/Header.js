/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Glitch from "./Glitch";
import { Link } from "gatsby";
import Navbar from "./Navbar";
import { useSiteMetadata } from "./useSiteMetadata";
import Checkout from "./snipcart/Checkout";

const Container = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  min-height: 8vh;
  padding: 1em;
  margin-bottom: 1em;
`;

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
  padding-bottom: 1em;

  align-self: center;
  justify-self: center;

  @media (min-width: 500px) {
    font-size: 3em;
  }

  @media (min-width: 700px) {
    font-size: 4em;
    padding-bottom: 0.5em;
  }
`;

export default () => {
  const { siteName } = useSiteMetadata();
  return (
    <Container
      sx={{
        backgroundColor: "primary",
        borderBottom: "solid 1px",
        borderColor: "accent"
      }}
    >
      <Title
        sx={{
          fontFamily: "heading",
          letterSpacing: "text"
        }}
      >
        <Link
          to="/"
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            textTransform: "uppercase",
            "&:hover": {
              color: "white"
            },
            "&.active": {
              color: "accent"
            }
          }}
        >
          <Glitch>{siteName}</Glitch>
        </Link>
      </Title>
      <Checkout />
      <Navbar />
    </Container>
  );
};
