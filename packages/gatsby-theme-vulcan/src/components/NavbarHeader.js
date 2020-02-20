/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { useSiteMetadata } from "./useSiteMetadata";
import Glitch from "./Glitch";
import Checkout from "./snipcart/Checkout";
// import { useBreakpoints } from "react-breakpoints-hook";
import { breakpoints } from "./common-page-elements";
import useBreakpoints from "./window/index";

const Nav = styled.nav`
  grid-area: nav;
  background-color: #000010;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  font-family: Montserrat;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 400;

  & > ul {
    list-style: none;
    padding: 16px;
    margin: 0;

    & > li {
      opacity: 0.9;
      cursor: crosshair;
      transition: 200ms;
      text-decoration: none;
      white-space: nowrap;
      font-weight: 700;
      letter-spacing: 2px;
      color: white;
      &:hover {
        opacity: 1;
      }
      & > li > a {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        color: white;
      }
    }

    & > li > a {
      opacity: 0.9;
      color: #ffffff;
      cursor: crosshair;
      transition: 200ms;
      text-decoration: none;
      white-space: nowrap;
      font-weight: 400;
      &:hover {
        opacity: 1;
      }
      & > li > a {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
      }
    }

    & > li {
      @media (min-width: 1280px) {
        padding-right: 36px;
      }

      &::before {
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid white;
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .link {
      &::before {
        padding-right: 0;
        display: none;
      }
      & > a {
        text-decoration: none;
        font-weight: 700;
      }
    }
  }

  & > ul {
    display: flex;
    height: 40px;
    align-items: center;
    background-color: transparent;

    & > li {
      position: relative;
      margin: 0 8px;

      & > ul {
        visibility: hidden;
        opacity: 0;
        padding: 0;
        min-width: 160px;
        background-color: #000010;
        position: absolute;
        top: calc(50px + 5px);
        left: 50%;
        transform: translateX(-50%);
        transition: 200ms;
        transition-delay: 200ms;

        & > li {
          margin: 0;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 30px;
          padding-right: 40px;

          &::before {
            width: 0;
            height: 0;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 5px solid black;
          }

          & > ul {
            top: -2%;
            left: 100%;
            transform: translate(0);
          }
          &:hover {
            background-color: #f3f3f3;
          }
        }

        & > li > a {
          color: black;
          font-weight: 700;
        }
      }

      &:hover {
        & > ul {
          opacity: 1;
          visibility: visible;
          transition-delay: 0ms;
        }
      }
    }
  }

  /* 48em = 768px */
  @media screen and (max-width: 1024px) {
    .navLinks {
      width: 60%;
      & > li {
        font-size: 1em;
      }
    }
    .logo {
      font-size: 2em;
    }
  }

  /* 48em = 768px or less */
  @media screen and (max-width: 768px) {
    .navLinks {
      position: absolute;
      right: 0;
      height: 90vh;
      top: 8vh;
      background-color: #000010;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      transform: ${props =>
        props.open === true ? "translateX(0)" : "translateX(100%)"};
      transition: transform 0.5s ease-in;

      & > ul {
        visibility: hidden;
        opacity: 0;
        padding: 0;
        min-width: 160px;
        background-color: #000010;
        position: absolute;
        top: calc(50px + 5px);
        left: 50%;
        transform: translateX(-50%);
        transition: 200ms;
        transition-delay: 200ms;

        & > li {
          margin: 0;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 30px;
          padding-right: 40px;

          &::before {
            width: 0;
            height: 0;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 5px solid #000010;
          }

          & > ul {
            top: -2%;
            left: 100%;
            transform: translate(0);
          }
          &:hover {
            background-color: #f3f3f3;
          }
        }
      }
      & > li {
        opacity: 1;
      }
    }
  }
`;

const Burger = styled.button`
  display: none;
  border-style: none;
  background-color: transparent;

  .line1 {
    width: 12px;
    height: 2px;
    background-color: white;
    margin: 5px;
  }
  .line2 {
    width: 16px;
    height: 2px;
    background-color: white;
    margin: 5px;
  }
  .line3 {
    width: 20px;
    height: 2px;
    background-color: white;
    margin: 5px;
  }

  @media screen and (max-width: 768px) {
    display: block;
    cursor: crosshair;
  }
`;

const Logo = styled.span`
  letter-spacing: 6px;
  font-weight: 400;
  font-family: Montserrat;
  text-transform: uppercase;
  font-size: 2em;
  color: white;
`;

export default () => {
  const { siteName, hasBlog } = useSiteMetadata();
  const [open, setOpen] = React.useState(false);
  let { xs, sm } = useBreakpoints(breakpoints);

  const mobileContent = (
    <>
      <ul className="navLinks">
        <li className="link">
          <Link
            to="/contact"
            sx={{
              color: "white",
              cursor: "crosshair",
              textDecoration: "none",
              fontSize: "1em",
              fontWeight: "heading",
              fontFamily: "heading",
              letterSpacing: "body",
              textTransform: "uppercase",
              width: "min-content",
              "&:hover": {
                color: "primary",
                backgroundColor: "accent"
              }
            }}
            onClick={() => setOpen(!open)}
          >
            contact
          </Link>
        </li>
        <li className="link">
          <Link
            to="/sizeGuide"
            sx={{
              color: "white",
              cursor: "crosshair",
              textDecoration: "none",
              fontSize: "1em",
              fontWeight: "heading",
              fontFamily: "heading",
              letterSpacing: "body",
              textTransform: "uppercase",
              width: "max-content",
              "&:hover": {
                color: "primary",
                backgroundColor: "accent"
              }
            }}
            onClick={() => setOpen(!open)}
          >
            size guide
          </Link>
        </li>
        <li className="link">
          <Link
            to="/deliveryAndReturns"
            sx={{
              color: "white",
              cursor: "crosshair",
              textDecoration: "none",
              fontSize: "1em",
              fontWeight: "heading",
              fontFamily: "heading",
              letterSpacing: "body",
              textTransform: "uppercase",
              width: "max-content",
              "&:hover": {
                color: "primary",
                backgroundColor: "accent"
              }
            }}
            onClick={() => setOpen(!open)}
          >
            delivery + returns
          </Link>
        </li>
        <li className="link">
          <Link
            to="/privacy"
            sx={{
              color: "white",
              cursor: "crosshair",
              textDecoration: "none",
              fontSize: "1em",
              fontWeight: "heading",
              fontFamily: "heading",
              letterSpacing: "body",
              textTransform: "uppercase",
              width: "max-content",
              "&:hover": {
                color: "primary",
                backgroundColor: "accent"
              }
            }}
            onClick={() => setOpen(!open)}
          >
            privacy policy
          </Link>
        </li>
      </ul>
      <Checkout />
    </>
  );

  const desktopContent = (
    <ul className="navLinks">
      <li className="link">
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
      </li>
      <li className="link">
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
      </li>
      <li className="link">
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
      </li>
      <li className="link">
        <Checkout />
      </li>
    </ul>
  );

  const content = xs || sm ? mobileContent : desktopContent;

  return (
    <Nav
      sx={{
        backgroundColor: "primary",
        borderBottom: "solid 1px",
        borderColor: "accent"
      }}
      open={open}
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
        <Logo className="logo">
          <Glitch>{siteName}</Glitch>
        </Logo>
      </Link>
      {content}
      <Burger onClick={() => setOpen(!open)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </Burger>
    </Nav>
  );
};
