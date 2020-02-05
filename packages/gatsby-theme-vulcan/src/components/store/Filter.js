/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
// import React from 'react';

// import Select, { components } from 'react-select';

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
    margin: 0 2em;
`;

export default ({productInfo}) => {
    console.log(productInfo);
    // const convertCategoriesForDropdown = (productInfo) => {
    //     console.log(productInfo);
    // }

  return (
    <Container sx={{
        backgroundColor: 'secondary',
        fontFamily: 'heading',
        fontWeight: 'body'
    }}>
    {/* <Select
    defaultValue={colourOptions[1]}
    options={groupedOptions}
    components={{ Group }}
    /> */}
    <p>filter goes here</p>
    </Container>
  );
};