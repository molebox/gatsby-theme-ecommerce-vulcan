/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Card from "./Card";

const Container = styled.ul`
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 2em;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default () => {
  return (
    <Container>
      <li>
        <Card>
          <img src="https://source.unsplash.com/nimElTcTNyY" />
        </Card>
      </li>
      <li>
        <Card>
          <img src="https://source.unsplash.com/pkUH647RogQ" />
        </Card>
      </li>
      <li>
        <Card>
          <img src="https://source.unsplash.com/6ozhV5b9ims" />
        </Card>
      </li>
      <li>
        <Card>
          <img src="https://source.unsplash.com/svQZUVLOLjM" />
        </Card>
      </li>
      <li>
        <Card>
          <img src="https://source.unsplash.com/nahUo1GhcrA" />
        </Card>
      </li>
      <li>
        <Card>
          <img src="https://source.unsplash.com/-yPg8cusGD8" />
        </Card>
      </li>
    </Container>
  );
};
