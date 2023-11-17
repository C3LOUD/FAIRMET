import { CSSReset, ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Fonts from "./Fonts";
import { router } from "./Routes";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = extendTheme({
  fonts: {
    heading: `"Baskerville Old Face", "Yu Gothic UI", serif`,
    body: `"Gill Sans MT", "Yu Gothic UI", san-serif`,
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
