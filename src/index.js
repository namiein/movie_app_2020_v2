import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// React Application should render only 1 component!
// ==> that is <App />

// javaScript + HTML == jsx
// Write the component as if writing HTML

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
