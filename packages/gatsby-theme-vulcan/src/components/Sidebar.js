/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 1em;

  // border: solid 1px pink;
`;

const Text = styled.p`
  font-size: 2em;

  @media (min-width: 500px) {
    font-size: 3em;
  }

  @media (min-width: 700px) {
    font-size: 4em;
  }
`;

export default () => {
  return (
    <Container>
      <Text
        sx={{
          fontFamily: "heading",
          letterSpacing: "body",
          lineHeight: "tagline"
        }}
      >
        STYLE IS A WAY TO SAY WHO YOU ARE WITHOUT HAVING TO SPEAK
      </Text>
    </Container>
  );
};
