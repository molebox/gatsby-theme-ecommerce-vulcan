/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: nav;
  height: 10vh;
  // border: solid 1px purple;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  width: 100%;
  & > ul > li {
    cursor: crosshair;
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
            about
          </li>
          <li
            sx={{
              fontFamily: "heading"
            }}
          >
            store
          </li>
          <li
            sx={{
              fontFamily: "heading"
            }}
          >
            blog
          </li>
        </ul>
      </Nav>
    </Container>
  );
};
