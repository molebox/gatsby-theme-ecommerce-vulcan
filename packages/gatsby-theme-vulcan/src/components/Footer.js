/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: footer;
  height: 10vh;
  border: solid 1px red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => {
  return <Container>FOOTER</Container>;
};
