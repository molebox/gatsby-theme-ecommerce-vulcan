/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Button = styled.button`
  font-size: 1em;
  height: 2.5em;
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
`;

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
  onClick,
  ...customFieldProps
}) => {
  return (
    <Button
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
        "&:hover": {
          color: "primary",
          backgroundColor: "accent",
          fontWeight: "bold"
          // boxShadow: "-3px 3px #00001F"
        },
        "&:active": {
          boxShadow: "-1px 1px #00001F"
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
    </Button>
  );
};
