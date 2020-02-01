/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-content: center;
`;

const ContactForm = styled.form``;

export default ({ children }) => {
  return <Container>{children}</Container>;
};
