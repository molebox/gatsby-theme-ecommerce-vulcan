/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import GlobalReset from "./GlobalReset";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "categories"
    "main"
    "footer";

  height: 100%;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "categories main"
      "footer   footer";

    height: 100%;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "categories main"
      "footer footer ";

    height: 100%;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 4fr;
    grid-template-areas:
      "header header"
      "categories main"
      "footer footer";

    height: 100%;
  }
`;

export default ({ children }) => {
  return (
    <GlobalReset>
      <Container>{children}</Container>
    </GlobalReset>
  );
};