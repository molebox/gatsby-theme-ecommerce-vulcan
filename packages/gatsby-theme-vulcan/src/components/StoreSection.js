/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Card from "./Card";
import { graphql } from "gatsby";

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
          <img src="https://source.unsplash.com/nimElTcTNyY" alt="fashion" />
        </Card>
      </li>
      <li>
        <Card>
          <img src="https://source.unsplash.com/pkUH647RogQ" alt="fashion" />
        </Card>
      </li>
      <li>
        <Card>
          <img src="https://source.unsplash.com/6ozhV5b9ims" alt="fashion" />
        </Card>
      </li>
      <li>
        <Card>
          <img src="https://source.unsplash.com/svQZUVLOLjM" alt="fashion" />
        </Card>
      </li>
      <li>
        <Card>
          <img src="https://source.unsplash.com/nahUo1GhcrA" alt="fashion" />
        </Card>
      </li>
      <li>
        <Card>
          <img src="https://source.unsplash.com/-yPg8cusGD8" alt="fashion" />
        </Card>
      </li>
    </Container>
  );
};

export const query = graphql`
  query StoreSectionProductsQuery {
    allSanityProduct {
      nodes {
        categories {
          title
        }
        slug {
          current
        }
        title
        blurb {
          en
        }
        _rawBody
      }
    }
  }
`;
