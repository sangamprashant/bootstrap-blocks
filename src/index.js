import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { AppProvider } from "./context/AppContext";
const Loading = () => (
  <div className="loading-container-">
    <div className="loading-spinner" />
    <span>Loading your application, please wait...</span>
  </div>
);
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);
