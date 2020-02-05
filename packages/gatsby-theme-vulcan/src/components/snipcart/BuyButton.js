/** @jsx jsx */
import { jsx } from "theme-ui";

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
        textTransform: "uppercase",
        "&:hover": {
          color: "primary",
          backgroundColor: "accent",
          fontWeight: "bold",
          boxShadow: "-3px 3px #00001F"
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
    </button>
  );
};
