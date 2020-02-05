/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.section`
  grid-area: storeSidebar;
  height: 30%;
  width: 100%;
  padding: 1em;
  margin: 2em;

  display: flex;
  justify-content: center;
`;

export default () => {
  return <Container sx={{
    backgroundColor: 'secondary'
  }}>store sidebar</Container>;
};
