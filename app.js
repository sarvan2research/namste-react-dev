import React from "react";
import ReactDOM from "react-dom/client";

// React element creation
const heading = React.createElement("h5",{},"Element via react!!")

// JSX like syntax used 

const jsHeading=<h4>Hellow world from JSX</h4>

// Functional Component with return

const HeadingComponent=() =>{
return <h3>Hellow world from Functional Component</h3>
}

// Shotest form of funcitonal component
const HeadingSingleLineComponent=() =><h2>Hellow world from Functional Single Line</h2>

// Multi line fuctional component with element composition
const HeadingMultiLineComponent=() =>(
<div id="container">
<h1>Hellow 
  world from Functional component with Element composition</h1>
<HeadingSingleLineComponent />
<HeadingComponent/>
{jsHeading}
{heading}
</div>
)
console.log(heading);

const rootDom=ReactDOM.createRoot(document.getElementById("root")); // Dom used to update element on screen.
rootDom.render(<HeadingMultiLineComponent />); // return js object to html elementxxs