/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { useSiteMetadata } from "./useSiteMetadata";

const Container = styled.div`
  grid-area: sidebar;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 2em;

  @media (min-width: 700px) {
    width: 90%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    padding: 1em;
    justify-content: flex-start;
    align-itmes: center;
  }
`;

const Text = styled.p`
  font-size: 1.8em;

  @media (min-width: 500px) {
    font-size: 2em;
    line-height: 80px;
  }

  @media (min-width: 700px) {
    font-size: 3em;
    line-height: 100px;
  }

  @media (min-width: 1280px) {
    font-size: 3em;
    line-height: 80px;
    align-self: baseline;
  }
`;

export default () => {
  const { tagline } = useSiteMetadata();
  return (
    <Container>
      <Text
        sx={{
          fontFamily: "heading",
          letterSpacing: "text",
          fontWeight: "bold",
          color: "primary",
          textTransform: "uppercase"
        }}
      >
        {tagline}
      </Text>
    </Container>
  );
};
