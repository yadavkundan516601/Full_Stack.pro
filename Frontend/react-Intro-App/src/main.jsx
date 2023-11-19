import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Custom react element creation
const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "click me to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* using the custom element */}
    {reactElement}
  </React.StrictMode>
);
