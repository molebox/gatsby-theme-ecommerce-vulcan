// /** @jsx jsx */
// import { jsx } from "theme-ui";
// import styled from "@emotion/styled";
// import { graphql, Link, useStaticQuery } from "gatsby";
// import GatsbyImage from "gatsby-image";
// import CategoryCard from "./CategoryCard";

// const Container = styled.section`
//   min-height: 900px;
// `;

// const ListContainer = styled.ul`
//   list-style: none;
//   margin: 2em;
//   display: grid;
//   grid-gap: 3em;
//   grid-auto-flow: dense;
//   grid-template-columns: 1fr 1fr;
//   justify-items: center;
//   width: auto;
//   height: 100%;
//   justify-self: center;

//   @media (min-width: 700px) {
//     grid-template-columns: 1fr 1fr;
//   }

//   @media (min-width: 1280px) {
//     grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
//   }
// `;

// export default () => {
//   const cats = useStaticQuery(query);
//   const categoryNodes = cats.allSanityCategory.nodes;
//   const rootCategories = categoryNodes.filter(cat => cat.isRoot === true);
//   return (
//     <Container>
//       <ListContainer>
//         {rootCategories.map(category => (
//           <Link to="test" key={category.id}>
//             <CategoryCard text={category.title}>
//               <GatsbyImage
//                 fluid={category.categoryImage.asset.fluid}
//                 alt={category.title}
//               />
//             </CategoryCard>
//           </Link>
//         ))}
//       </ListContainer>
//     </Container>
//   );
// };

// export const query = graphql`
//   query StoreCategoriesQuery {
//     allSanityCategory {
//       nodes {
//         title
//         isRoot
//         description
//         id
//         categoryImage {
//           asset {
//             fluid {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
