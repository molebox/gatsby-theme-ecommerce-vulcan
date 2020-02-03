/** @jsx jsx */
import { jsx } from "theme-ui";
// import styled from "@emotion/styled";

// const Button = styled.button`
//      display: inline-block;
//      padding: 0.35em 1.2em;
//      margin: 0 0.3em 0.3em 0;
//      border-radius: 0.12em;
//      box-sizing: border-box;
//      text-align: center;
//      transition: all 0.2s;
//      cursor: crosshair;

//     @media all and (max-width:30em){
//         & {
//           display:block;
//           margin:0.4em auto;
//          }
// `;

export default ({
  itemId,
  text,
  itemPrice,
  image,
  itemTitle,
  itemDescription,
  itemUrl,
  itemPath,
  isStackable,
  isTaxIncluded,
  ...customFieldProps
}) => {
  return (
    <button
      sx={{
        fontFamily: "heading",
        fontWeight: "heading",
        height: "3em",
        width: "10em",
        border: "0.1em solid",
        padding: "0.35em 1.2em",
        borderColor: "primary",
        backgroundColor: "primary",
        color: "accent",
        cursor: "crosshair",
        "&:hover": {
          color: "primary",
          backgroundColor: "accent",
          fontWeight: "bold",
          boxShadow: "-3px 3px #00001F"
        },
        "&:active": {
          boxShadow: "-3px 3px #00001F"
        }
      }}
      className="snipcart-add-item"
      data-item-id={itemId}
      data-item-price={itemPrice}
      data-item-image={image}
      data-item-name={itemTitle}
      data-item-description={itemDescription}
      data-item-url={itemUrl + itemPath}
      data-item-stackable={isStackable}
      data-item-has-taxes-included={isTaxIncluded}
      {...customFieldProps}
    >
      {text}
    </button>
  );
};
