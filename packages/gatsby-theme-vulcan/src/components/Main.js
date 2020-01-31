/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: main;
  height: auto;
  // min-height: 700px;
  margin: 1em;
`;

export default ({ children }) => {
  return <Container>{children}</Container>;
};
