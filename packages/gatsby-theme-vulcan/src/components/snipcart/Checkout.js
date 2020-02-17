/** @jsx jsx */
import { jsx } from "theme-ui";
import { AiOutlineShopping } from "react-icons/ai";

export default () => {
  return (
    <div
      sx={{
        cursor: "crosshair",
        color: "white",
        "&:hover": {
          backgroundColor: "accent",
          color: "primary"
        }
      }}
      className="snipcart-checkout"
    >
      <AiOutlineShopping size="1.5em" />
    </div>
  );
};
