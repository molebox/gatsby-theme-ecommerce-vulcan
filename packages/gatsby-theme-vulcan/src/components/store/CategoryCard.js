/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 3em;

  @media (min-width: 700px) {
    max-width: 600px;
    max-height: 700px;
    width: 600px;
  }

  @media (min-width: 1280px) {
    max-width: 800px;
    max-height: 900px;
    width: 800px;
  }

  cursor: crosshair;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const OverlayContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ({ children, text }) => {
  return (
    <Container>
      {children}
      <OverlayContent className="overlay">
        <p
          sx={{
            fontFamily: "heading",
            color: "background"
          }}
        >
          {text}
        </p>
      </OverlayContent>
    </Container>
  );
};
