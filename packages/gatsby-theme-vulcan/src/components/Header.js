/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Glitch from "./Glitch";
import { Link } from "gatsby";
import Navbar from "./Navbar";
import { useSiteMetadata } from './useSiteMetadata';

const Container = styled.header`
  grid-area: header;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
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
  const {siteName} = useSiteMetadata();
  return (
    <Container>
      <Title
        sx={{
          fontFamily: "heading"
        }}
      >
        <Link
          to="/"
          sx={{
            color: "primary",
            cursor: "crosshair",
            textDecoration: "none",
            "&:hover": {
              color: "accent"
            },
            "&.active": {
              color: "accent"
            }
          }}
        >
          <Glitch>{siteName}</Glitch>
        </Link>
      </Title>
      <Navbar />
    </Container>
  );
};
