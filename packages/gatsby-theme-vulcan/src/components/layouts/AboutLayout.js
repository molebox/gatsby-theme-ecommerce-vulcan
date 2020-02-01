/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main"
    "footer";

  height: 100vh;
  width: 100vw;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "main     main"
      "footer   footer";

    height: 100vh;
    width: 100vw;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 4fr;
    grid-template-areas:
      "header header"
      "main main"
      "footer footer ";

    height: 100vh;
    width: 100vw;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 4fr;
    grid-template-areas:
      "header header"
      "main main"
      "footer footer";

    height: 100vh;
    width: 100vw;
  }
`;

export default ({ children }) => {
  return <Container>{children}</Container>;
};
