/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
// import React from 'react';

// import Select, { components } from 'react-select';
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
// import flattenDepth from 'lodash.flattendepth';

// const groupStyles = {
//   border: `2px dotted ${colourOptions[2].color}`,
//   borderRadius: '5px',
//   background: '#f2fcff',
// };

// const Group = props => (
//   <div style={groupStyles}>
//     <components.Group {...props} />
//   </div>
// );

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-area: filter;
  height: 3em;
  margin: 1em 2em;
`;

export default () => {
  const categories = useStaticQuery(query);
  const info = categories.allSanityCategory.nodes;
  const parents = info.map(element => element.parents).flat(2);
  console.log({ parents });
  console.log({ categories });

  //   console.log('flat? ', flattenDepth(info, 3));

  //   const cats = info.map((category, index) => {
  //     console.log({index})
  //     index ++;
  //     return {
  //       value: category.parents[index].title,
  //       label: category.parents[index].title
  //     }
  //   });

  //   const removeDuplicates = (array, key) => {
  //     let lookup = new Set();
  //     return array.filter(obj => !lookup.has(obj[key]) && lookup.add(obj[key]));
  // }

  // console.log('YO:', removeDuplicates(cats, 'value'));

  // const children = info.map(element => {
  //   return {
  //     parents: removeDuplicates(element.parents, 'title'),
  //     children: element.title

  //   }
  // });

  //     console.log('removeDuplicates: ', removeDuplicates(parents, 'title'))
  console.log({ info });

  // const convertCategoriesForDropdown = (productInfo) => {
  //     console.log(productInfo);
  // }

  return (
    <Container
      sx={{
        backgroundColor: "secondary",
        fontFamily: "heading",
        fontWeight: "body"
      }}
    ></Container>
  );
};

export const query = graphql`
  query ProductCategoryQuery {
    allSanityCategory {
      nodes {
        parents {
          title
        }
        title
      }
    }
  }
`;
