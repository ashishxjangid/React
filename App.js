// const heading= React.createElement("h1", {id: "heading"}, "Hello from React");
// //this will create an object or react element
// console.log(heading);

const parent = React.createElement("div",
    {id: "parent"}, 
    React.createElement("div", {id: "child"},
        [React.createElement("h1", {}, "Im an h1 tag"), 
        React.createElement("h2", {}, "Im an h2 tag")]
    )
);

const root= ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);