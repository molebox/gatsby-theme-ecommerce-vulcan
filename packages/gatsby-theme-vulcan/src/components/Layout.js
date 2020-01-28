/** @jsx jsx */
import { jsx } from "theme-ui";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "sidebar"
    "footer";

  height: 100vh;
  width: 100vw;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "nav     nav"
      "main     main"
      "sidebar sidebar"
      "footer   footer";
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header header  header"
      "nav    nav     nav"
      "sidebar main main"
      "footer footer  footer";
  }
`;

export default ({ children }) => {
  return (
    <Container>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
          }
          body {
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            overflow-x: hidden;
          }
        `}
      />
      {children}
    </Container>
  );
};
