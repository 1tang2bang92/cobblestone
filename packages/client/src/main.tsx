import { css, Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        #root {
          width: 100%;
          height: 100%;
        }
      `}
    />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
