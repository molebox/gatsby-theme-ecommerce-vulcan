/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  align-items: center;
  justify-items: center;
  width: 500px;

  @media (min-width: 500px) {
    & > ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media (min-width: 700px) {
      & > ul {
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
      }
    }
  }
`;

export default () => {
  return (
    <Nav>
      <Link
        to="/about"
        sx={{
          color: "primary",
          cursor: "crosshair",
          textDecoration: "none",
          fontSize: "1.2em",
          fontFamily: "heading",
          fontWeight: "heading",
          letterSpacing: "body",
          gridColumn: 1,
          "&:hover": {
            color: "accent",
            textShadow: "-3px 3px #00001F"
          },
          "&.active": {
            color: "accent"
          }
        }}
      >
        about
      </Link>
      <Link
        to="/store"
        sx={{
          color: "primary",
          cursor: "crosshair",
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: "1.2em",
          fontWeight: "heading",
          letterSpacing: "body",
          gridColumn: 2,
          "&:hover": {
            color: "accent",
            textShadow: "-3px 3px #00001F"
          },
          "&.active": {
            color: "accent"
          }
        }}
      >
        store
      </Link>
      <Link
        to="/blog"
        sx={{
          color: "primary",
          cursor: "crosshair",
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: "1.2em",
          fontWeight: "heading",
          letterSpacing: "body",
          gridColumn: 3,
          "&:hover": {
            color: "accent",
            textShadow: "-3px 3px #00001F"
          },
          "&.active": {
            color: "accent"
          }
        }}
      >
        blog
      </Link>
    </Nav>
  );
};
