/** @jsx jsx */
import { jsx } from "theme-ui";
import CartToast from "./CartToast";
import { useToasts } from 'react-toast-notifications';

export default () => {
  const { addToast } = useToasts();
  return (
    <div sx={{
      top: '1em',
      right: '2em',
      position: 'absolute'
    }}>
 <button
    sx={{
      fontFamily: "heading",
      fontWeight: "bold",
      letterSpacing: "body",
      textTransform: 'uppercase',
      height: "3em",
      width: "10em",
      border: "2px solid",
      padding: "0.35em 1.2em",
      borderColor: "primary",
      backgroundColor: "secondary",
      color: "primary",
      cursor: "crosshair",
      boxShadow: "-3px 3px #00001F",
      "&:hover": {
        color: "primary",
        backgroundColor: "secondary",
        fontWeight: "bold",
        boxShadow: "-3px 3px #00001F"
      },
      "&:active": {
        boxShadow: "-1px 1px #00001F"
      }
    }}
    onClick={() => addToast(<CartToast/>, {
    appearance: 'info',
    autoDismiss: false,
    })}
    >
    My Cart
  </button>
    </div>
   
  );
};


