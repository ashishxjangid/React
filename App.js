import React from "react";
import ReactDOM from "react-dom/client";

// const heading= React.createElement("h1", {id: "heading"}, "Hello from React");
// //this will create an object or react element
// console.log(heading);

const parent = React.createElement("div",
    {id: "parent"}, 
    React.createElement("div", {id: "child"},
        [React.createElement("h1", {}, "I am Namaste React 🐱‍🏍"), 
        React.createElement("h2", {}, "I am ashish jangid")]
    )
);

const root= ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);