/** @jsx jsx */
import { jsx } from "theme-ui";
import { FiShoppingBag } from "react-icons/fi";

export default () => {
  return (
    <div
      sx={{
        top: "1em",
        right: "3em",
        position: "absolute",
        cursor: "crosshair",
        "&:hover": {
          color: "secondaryDarker"
        }
      }}
      className="snipcart-checkout"
    >
      <FiShoppingBag size="2em" />
    </div>
  );
};
