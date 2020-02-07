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
          color: "white",
          cursor: "crosshair",
          textDecoration: "none",
          textTransform: "uppercase",
          fontSize: "1.1em",
          fontFamily: "heading",
          fontWeight: "heading",
          letterSpacing: "body",
          gridColumn: 1,
          width: "max-content",
          "&:hover": {
            color: "primary",
            backgroundColor: "accent"
          },
          "&.active": {
            color: "accent"
          }
        }}
      >
        about
      </Link>
      <Link
        to="/productsPage"
        sx={{
          color: "white",
          cursor: "crosshair",
          textDecoration: "none",
          fontFamily: "heading",
          textTransform: "uppercase",
          fontSize: "1.1em",
          fontWeight: "heading",
          letterSpacing: "body",
          gridColumn: 2,
          width: "max-content",
          "&:hover": {
            color: "primary",
            backgroundColor: "accent"
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
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontFamily: "heading",
            fontWeight: "heading",
            textTransform: "uppercase",
            fontSize: "1.1em",
            letterSpacing: "body",
            gridColumn: 3,
            width: "max-content",
            "&:hover": {
              color: "primary",
              backgroundColor: "accent"
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
