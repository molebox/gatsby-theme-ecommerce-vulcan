/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: auto;
  height: auto;
  cursor: crosshair;

  // border: solid 1px black;

  & > img {
    // height: auto;
    // max-width: 100%;
    object-fit: cover;
    width: 300px;
    height: 500px;
  }
`;

export default ({ children }) => {
  return <Container>{children}</Container>;
};
