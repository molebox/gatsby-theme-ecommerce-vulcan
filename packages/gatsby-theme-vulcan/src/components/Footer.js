/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: footer;
  height: 20vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
`;

const Social = styled.div`
  margin: 1em;
  grid-column: 1;

  & > ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
  }
`;

export default () => {
  return (
    <Container
      sx={{
        backgroundColor: "primary",
        color: "accent"
      }}
    >
      <Social
        sx={{
          fontFamily: "heading"
        }}
      >
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Pinterest</li>
        </ul>
      </Social>
    </Container>
  );
};
