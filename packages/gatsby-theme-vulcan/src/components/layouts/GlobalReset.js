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
            scroll-behavior: smooth;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            overflow-x: hidden;
            height: 100%;
          }
        `}
      />
      {children}
    </React.Fragment>
  );
};
