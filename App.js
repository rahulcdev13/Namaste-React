const heading = React.createElement("h1", { id: "heading" }, "Hello World from React")
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading);

// ================================
{/* <div id="parent_child">
    <div id="parent">
        <div id="child">
            <h1 id="child_parent">Hello World from React child parent</h1>
            <h1 id="child">Hello World from React child</h1>
        </div>
    </div>
</div>  */}

const parent = React.createElement(
    "div", { id: "parent" },
        React.createElement("div", { id: "child" },
        React.createElement("h1", { id: 'child_parent' }, "Hello World from React child parent"),
        React.createElement("h3", { id: 'child_parent' }, "Hello World from React child")
        ),
        React.createElement("div", { id: "child2" },
        React.createElement("p", { id: 'child_parent' }, "Hello World from React child parent"),
        React.createElement("p", { id: 'child_parent' }, "Hello World from React child")
        )
)
console.log(parent);
const parent_child = ReactDOM.createRoot(document.getElementById('parent_child'))
parent_child.render(parent); 
