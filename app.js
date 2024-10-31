import React from "react";
import ReactDOM from "react-dom";

const parent=React.createElement(
  "div",
  {id:"parent"},
  [React.createElement(
    "div",
    {id:"child"},
    [React.createElement("h1",{},"This H1 tag via parent/child div's"),
    React.createElement("h2",{},"This H2 tag via parent/child div's")]
  ),
  React.createElement(
    "div",
    {id:"child2"},
    [React.createElement("h1",{},"This H1 tag via parent/child div's"),
    React.createElement("h2",{},"This H2 tag via parent/child div's")])]
);

console.log(parent);

const rootDom=ReactDOM.createRoot(document.getElementById("root")); // Dom used to update element on screen.
rootDom.render(parent); // return js object to html element