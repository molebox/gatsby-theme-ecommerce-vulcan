/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.header`
  grid-area: header;
  height: 15vh;
  // border: solid 1px blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1``;

export default () => {
  return (
    <Container>
      <Title
        sx={{
          fontFamily: "heading"
        }}
      >
        VULCAN
      </Title>
    </Container>
  );
};
