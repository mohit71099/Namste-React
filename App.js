

//Creating Hello World
const heading = React.createElement(
    "h1", // for  the tag
    {id:"heading"}, // for giving attribute we can give multiple attribute
    "Hello World From React"); //CreatElement is a part of React

     console.log(heading); //it will return an object 
const root = ReactDOM.createRoot(document.getElementById("root"));   //CreateDOM has CreateRoot

//root.render(heading); // render will convert object into browser level code 

/*
Nested Tags
<div>
<div>
<h1>I am H1</h1> 
<h2>I am H2</h2>
</div>
</div>

*/
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {},
            "I am H1"
        ),
        React.createElement(    // to create sibling we use array of things
            "h2",
            {},
            "I am H2"
        )
    ]
    )
);
 
const root1 = ReactDOM.createRoot(document.querySelector("div"));
root1.render(parent);        