/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import BuyButton from "./snipcart/BuyButton";

const Container = styled.div`
  grid-area: nav;
  height: 10vh;
  // border: solid 1px purple;
  display: grid;
  grid-template-columns: auto 35em auto;
  align-items: center;
  // border-bottom: solid 1px black;
`;

const Nav = styled.nav`
  grid-column: 2;
  // width: 100%;
  & > ul > li {
    cursor: crosshair;
  }

  & > ul > li > a {
    text-transform: uppercase;
  }

  & > ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
  }

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

    & > ul > li > a {
      // &:before {
      //   content: "";
      //   border-left: solid 1px black;
      //   padding: 0.5em;
      // }

      // &:after {
      //   content: "";
      //   border-right: solid 1px black;
      //   padding: 0.5em;
      // }
    }
  }
`;

export default () => {
  return (
    <Container>
      <Nav>
        <ul>
          <li
            sx={{
              fontFamily: "heading"
            }}
          >
            <BuyButton text="BUY" />
            <Link
              to="about"
              sx={{
                color: "primary",
                cursor: "crosshair",
                textDecoration: "none",
                fontSize: "1.2em",
                fontWeight: "heading",
                letterSpacing: "body",
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
          </li>
          <li
            sx={{
              fontFamily: "heading"
            }}
          >
            <Link
              to="store"
              sx={{
                color: "primary",
                cursor: "crosshair",
                textDecoration: "none",
                fontSize: "1.2em",
                fontWeight: "heading",
                letterSpacing: "body",
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
          </li>
          <li
            sx={{
              fontFamily: "heading"
            }}
          >
            <Link
              to="blog"
              sx={{
                color: "primary",
                cursor: "crosshair",
                textDecoration: "none",
                fontSize: "1.2em",
                fontWeight: "heading",
                letterSpacing: "body",
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
          </li>
        </ul>
      </Nav>
    </Container>
  );
};
