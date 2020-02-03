import React from "react";
import { Global, css } from "@emotion/core";

export default ({ children }) => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
          }
          body {
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            overflow-x: hidden;
            max-width: 100%;
          }
        `}
      />
      {children}
    </React.Fragment>
  );
};
