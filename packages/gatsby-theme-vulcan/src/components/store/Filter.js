/** @jsx jsx */
import { jsx } from "theme-ui";
// import styled from "@emotion/styled";
import Select, { components } from "react-select";
// import makeAnimated from "react-select/animated";
import { graphql } from "gatsby";

// const controlComponent = props => (
//   <div>
//     <components.Control {...props} />
//   </div>
// );

// const animatedComponents = makeAnimated(controlComponent);

const groupStyles = {
  border: `2px solid`,
  borderRadius: "5px",
  background: "#f2fcff"
};

const Group = props => (
  <div style={groupStyles}>
    <components.Group {...props} />
  </div>
);

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   grid-area: filter;
//   height: 3em;
//   margin: 1em 2em;
// `;

export default props => {
  console.log({ props });
  const { rootCategories, getSelectedCategories } = props;
  // const allCategories = categories.map((cat) => ({
  //   label: cat.title,
  //   value: cat.title,
  //   id: cat.id
  // }));

  const handleSelection = selections => {
    if (selections) {
      console.log({ selections });
      return getSelectedCategories(selections);
    }
    return getSelectedCategories([]);
  };

  const groupedOptions = rootCategories.map(cat => ({
    label: cat.title,
    options: cat.childrenCategories.map(cat => ({
      label: cat.title,
      value: cat.title
    }))
  }));

  return (
    <Select
      sx={{
        width: "90%",
        color: "black",
        fontFamily: "heading",
        borderColor: "primary"
      }}
      isMulti
      isClearable
      name="filter"
      placeholder="Filter by category..."
      options={groupedOptions}
      components={{ Group }}
      onChange={handleSelection}
    />
  );
};

export const query = graphql`
  query ProductCategoryQuery {
    allSanityCategory {
      nodes {
        title
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
