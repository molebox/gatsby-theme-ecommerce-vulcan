/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import GlitchConstant from "./GlitchConstant";

const Container = styled.div`
  grid-area: sidebar;
  display: flex;
  justify-content: center;
  // align-items: center;
  height: auto;
  width: 50%;
  padding: 1em;
  margin: 0 auto;

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
  font-size: 0.8em;
  // text-shadow: -1px 1px #ffe900;

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
        <GlitchConstant>STYLE IS</GlitchConstant>A WAY TO SAY
        <GlitchConstant>WHO YOU ARE</GlitchConstant>
        WITHOUT HAVING TO SPEAK
      </Text>
    </Container>
  );
};
