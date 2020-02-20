/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const FixedFooter = styled.footer`
  grid-area: footer;
  background-color: #000010;
  position: sticky;
  bottom: 0;
  z-index: 100;
  width: 100vw;
  min-height: 10vh;
  height: 10vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default () => {
  return (
    <FixedFooter
      sx={{
        backgroundColor: "primary",
        borderTop: "solid 1px",
        borderColor: "accent"
      }}
    >
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
        to="/categories"
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
    </FixedFooter>
  );
};
