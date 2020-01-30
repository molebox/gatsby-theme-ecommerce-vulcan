/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  max-width: 300px;
  max-height: 500px;

  cursor: crosshair;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }

  & > img {
    object-fit: cover;
    width: 300px;
    height: 500px;
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
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

export default ({ children }) => {
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
          SHOP
        </p>
      </OverlayContent>
    </Container>
  );
};
