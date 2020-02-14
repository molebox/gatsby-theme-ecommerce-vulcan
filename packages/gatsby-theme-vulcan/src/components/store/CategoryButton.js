/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  font-size: 1.6em;
  height: 3em;
  width: 10em;

  @media (min-width: 500px) {
    font-size: 2em;
  }

  @media (min-width: 700px) {
    font-size: 2em;
  }

  @media (min-width: 1280px) {
    font-size: 1em;
  }

//   ${props =>
  props.selected === true
    ? `
//   color: #00001F;
//   background-color: #DE3C4B;
//   font-weight: bold;
//   box-shadow: -3px 3px #00001F;
//   `
    : `
//     background-color: #00001F;
//     color: white;
//   `}
`;

export default ({ category }) => {
  const [selected, setSelected] = React.useState(false);

  const setButtonSelected = () => setSelected(!selected);

  return (
    <Button
      selected={selected}
      onClick={setButtonSelected}
      sx={{
        fontFamily: "heading",
        fontWeight: "heading",
        border: "0.1em solid",
        padding: "0.35em 1.2em",
        borderColor: "primary",
        backgroundColor: "primary",
        color: "white",
        cursor: "crosshair",
        textTransform: "uppercase",
        // "&:hover": {
        //   color: "primary",
        //   backgroundColor: "accent",
        //   fontWeight: "bold",
        //   boxShadow: "-3px 3px #00001F"
        // },
        // "&:active": {
        //   boxShadow: "-1px 1px #00001F"
        // }

        "&:focus": {
          color: "primary",
          backgroundColor: "accent",
          fontWeight: "bold",
          boxShadow: "-3px 3px #00001F"
        },
        "&:active": {
          boxShadow: "-1px 1px #00001F"
        }
      }}
    >
      {category}
    </Button>
  );
};
