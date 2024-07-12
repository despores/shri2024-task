import React from "react";
import ReactDOM from "react-dom";
import { Header, Main } from "./components";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
);
