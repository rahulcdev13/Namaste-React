import React from "react";
import ReactDOM from 'react-dom/client'; 

const parent = React.createElement(
    "div", { id: "parent" },
        React.createElement("div", { id: "child" },
        React.createElement("h1", { id: 'child_parent' }, "Hello World from React child parent"),
        React.createElement("h3", { id: 'child_parent' }, "Hello World from React child")
        )
)
const roots = ReactDOM.createRoot(document.getElementById("root"))
roots.render(parent); 
