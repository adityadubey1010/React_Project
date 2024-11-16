


const heading = React.createElement("h1",{id:"heading"},"hello world");

const  divElement = React.createElement("div",{ id:"child$*2"},[heading,heading]);
const  divParent = React.createElement("div",{id:"parent"},[divElement,divElement]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divParent);



