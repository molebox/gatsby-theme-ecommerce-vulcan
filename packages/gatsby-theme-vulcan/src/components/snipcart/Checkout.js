/** @jsx jsx */
import { jsx } from "theme-ui";
import { AiOutlineShopping } from "react-icons/ai";

export default () => {
  return (
    <div
      sx={{
        top: "1em",
        right: "3em",
        position: "absolute",
        cursor: "crosshair",
        color: "white",
        "&:hover": {
          backgroundColor: "accent",
          color: "primary"
        }
      }}
      className="snipcart-checkout"
    >
      <AiOutlineShopping size="2em" />
    </div>
  );
};
