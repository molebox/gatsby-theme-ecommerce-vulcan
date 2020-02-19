/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: main;
  // height: 100%;
  // width: 100%;

  @media (min-width: 1280px) {
    height: 100%;
    margin: 5em auto;
    width: 100%;
  }
`;

export default ({ children }) => {
  return <Container>{children}</Container>;
};
