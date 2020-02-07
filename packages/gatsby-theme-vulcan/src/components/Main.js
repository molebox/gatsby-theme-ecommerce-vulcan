/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: main;
  height: auto;
  // min-height: 100%;
  margin: 1em;
`;

export default ({ children }) => {
  return <Container>{children}</Container>;
};
