/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Card from "../components/Card";
import { graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import { Link } from "gatsby";
import Main from "../components/Main";
import { useSiteMetadata } from "../components/useSiteMetadata";

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

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Price = styled.div`
  font-size: 1em;

  @media (min-width: 1280px) {
    font-size: 1em;
  }
`;

const OnSalePrice = styled.div`
  font-size: 0.8em;

  @media (min-width: 1280px) {
    font-size: 0.5em;
  }
`;

// const SidebarContainer = styled.section`
//   grid-area: categories;
//   height: 90%;
//   width: 90%;
//   padding: 1em;
//   margin: 2em;

//   display: flex;
//   justify-content: center;
// `;

export default ({ data }) => {
  const { nodes } = data.allSanityProduct;
  // const cats = data.allSanityCategory.nodes;
  // console.log({cats})
  const { currencySymbol } = useSiteMetadata();
  // const [selectedCategory, setSelectedCategory] = React.useState([]);

  // const rootCategories = cats.filter((cat) => cat.isRoot === true);

  // const hasChildren = rootCategories.filter((cat) => cat.childrenCategories);

  // const getSelectedCategories = selections => {
  //   const cats = selections.map(cat => cat.value);
  //   setSelectedCategory(cats);
  // };

  return (
    <Main>
      {/* <Filter
        getSelectedCategories={getSelectedCategories}
        sx={{
          margin: "2em"
        }}
        rootCategories={rootCategories}
      /> */}
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
            <Link to={`products/${node.slug.current}`}>
              <Card text="SHOP">
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
              {node.defaultProductVariant.onSalePrice ? (
                <PriceContainer>
                  <OnSalePrice
                    sx={{
                      fontFamily: "body",
                      fontWeight: "bold",
                      textDecoration: "line-through"
                    }}
                  >
                    {currencySymbol}
                    {node.defaultProductVariant.price}
                  </OnSalePrice>
                  <Price
                    sx={{
                      fontFamily: "body",
                      fontWeight: "bold"
                    }}
                  >
                    {currencySymbol}
                    {node.defaultProductVariant.onSalePrice}
                  </Price>
                </PriceContainer>
              ) : (
                <Price
                  sx={{
                    fontFamily: "body",
                    fontWeight: "bold"
                  }}
                >
                  {currencySymbol}
                  {node.defaultProductVariant.price}
                </Price>
              )}
            </ProductInfo>
          </li>
        ))}
      </ListContainer>
    </Main>
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
          onSalePrice
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

    allSanityCategory {
      nodes {
        title
        isRoot
        description
        id
        childrenCategories {
          title
          description
          id
        }
        categoryImage {
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
