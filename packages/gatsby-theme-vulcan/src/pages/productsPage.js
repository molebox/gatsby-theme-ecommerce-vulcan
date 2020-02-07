/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Card from ".././components/Card";
import { graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import { Link } from "gatsby";
import StoreLayout from "../components/layouts/StoreLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const ListContainer = styled.ul`
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 3em;
  grid-auto-flow: dense;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  width: auto;
  height: auto;
  justify-self: center;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const ProductInfo = styled.div`
  z-index: 1000;
  font-size: 1.5em;
  height: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// pass in the currency from siteMetadata
export default ({ data }) => {
  const { nodes } = data.allSanityProduct;
  console.log({ nodes });
  return (
    <StoreLayout>
      <Header />
      <Main>
        <ListContainer>
          {nodes.map((node, index) => (
            <li
              sx={{
                border: "solid 2px",
                borderColor: "primary",
                boxShadow: "-3px 3px #00001F",
                textDecoration: "none"
              }}
              key={index}
            >
              <Link to={`/${node.slug.current}`}>
                <Card>
                  <GatsbyImage
                    fluid={node.defaultProductVariant.mainImage[0].asset.fluid}
                    alt={node.defaultProductVariant.title}
                  />
                </Card>
              </Link>
              <ProductInfo
                sx={{
                  fontFamily: "heading",
                  borderTop: "3px solid",
                  borderColor: "primary",
                  textDecoration: "none"
                }}
              >
                <p>{node.defaultProductVariant.title}</p>
                <p>${node.defaultProductVariant.price}</p>
              </ProductInfo>
            </li>
          ))}
        </ListContainer>
      </Main>
      <Footer />
    </StoreLayout>
  );
};

export const query = graphql`
  query ProductsQuery {
    allSanityProduct {
      nodes {
        slug {
          current
        }
        id
        defaultProductVariant {
          title
          price
          mainImage {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
