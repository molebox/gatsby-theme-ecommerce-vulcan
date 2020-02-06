/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { useSiteMetadata } from "./useSiteMetadata";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  align-items: center;
  justify-items: center;
  width: 500px;

  // @media (min-width: 500px) {
  //   & > ul {
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //   }
  // }

  // @media (min-width: 700px) {
  //     & > ul {
  //       display: flex;
  //       justify-content: space-evenly;
  //       flex-direction: row;
  //     }
  //   }
  // }
`;

export default () => {
  const { hasBlog } = useSiteMetadata();
  return (
    <Nav>
      <Link
        to="/about"
        sx={{
          color: "primary",
          cursor: "crosshair",
          textDecoration: "none",
          textTransform: "uppercase",
          fontSize: "1.1em",
          fontFamily: "heading",
          fontWeight: "bold",
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
          textTransform: "uppercase",
          fontSize: "1.1em",
          fontWeight: "bold",
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
      {hasBlog ? (
        <Link
          to="/blog"
          sx={{
            color: "primary",
            cursor: "crosshair",
            textDecoration: "none",
            fontFamily: "heading",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "1.1em",
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
      ) : null}
    </Nav>
  );
};
