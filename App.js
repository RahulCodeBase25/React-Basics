import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am Rahul Singh!!"),
    React.createElement("h2", {}, "React learning has been started again"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am Honey Singh!!"),
    React.createElement("h2", {}, "I am learing React basics"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

