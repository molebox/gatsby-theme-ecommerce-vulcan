/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: sidebar;
  display: flex;
  justify-content: center;
  // align-items: center;
  height: 100%;
  width: 80%;
  padding: 1em;
  margin: 0 auto;
  // border-right: solid 1px black;

  @media (min-width: 700px) {
    width: 90%;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    padding: 1em;
  }
`;

const Text = styled.p`
  font-size: 0.9em;
  text-shadow: -1px 2px #ffe900;

  @media (min-width: 500px) {
    font-size: 2em;
    line-height: 80px;
  }

  @media (min-width: 700px) {
    font-size: 3em;
    line-height: 100px;
  }

  @media (min-width: 1280px) {
    font-size: 4em;
    line-height: 100px;
  }
`;

export default () => {
  return (
    <Container>
      <Text
        sx={{
          fontFamily: "heading",
          letterSpacing: "text",
          fontWeight: "bold",
          color: "primary"
        }}
      >
        STYLE IS A WAY TO SAY WHO YOU ARE WITHOUT HAVING TO SPEAK
      </Text>
    </Container>
  );
};
