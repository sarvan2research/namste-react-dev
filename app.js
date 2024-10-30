const heading = React.createElement("h1",{id:"heading"},"This is from react Namaste Dev!!"); // Returns JS object

console.log(heading);
const rootDom=ReactDOM.createRoot(document.getElementById("root")); // Dom used to update element on screen.
rootDom.render(heading); // return js object to html element