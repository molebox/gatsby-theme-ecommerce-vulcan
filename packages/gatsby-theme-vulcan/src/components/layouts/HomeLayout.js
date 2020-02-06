/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import GlobalReset from "./GlobalReset";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "sidebar"
    "main"
    "footer";
  height: 100vh;
  width: 100vw;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "main     main"
      "sidebar sidebar"
      "footer   footer";
    height: 100vh;
    width: 100vw;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 4fr;
    grid-template-areas:
      "header header"
      "main main"
      "sidebar sidebar"
      "footer footer ";
    height: 100vh;
    width: 100vw;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 4fr;
    grid-template-areas:
      "header header"
      "sidebar main"
      "sidebar main"
      "footer footer";
    height: 100vh;
    width: 100vw;
  }
`;

export default ({ children }) => {
  return (
    <GlobalReset>
      <Container>{children}</Container>
    </GlobalReset>
  );
};
