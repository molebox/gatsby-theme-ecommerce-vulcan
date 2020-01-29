/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Glitch from "./Glitch";
import { Link } from "gatsby";

const Container = styled.header`
  grid-area: header;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2em;

  @media (min-width: 500px) {
    font-size: 3em;
  }

  @media (min-width: 700px) {
    font-size: 4em;
  }
`;

export default () => {
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
          <Glitch>VULCAN</Glitch>
        </Link>
      </Title>
    </Container>
  );
};
