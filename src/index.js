import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const App = lazy(() => import("./App"));
ReactDOM.render(
  <Suspense fallback={<div>Loading... Please wait!</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
registerServiceWorker();
