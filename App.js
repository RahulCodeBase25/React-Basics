/**
 * <div id="parent">
 * <div id="child1">
 * <h1>I am rahul singh</h1>
 * <h2>I am learning react</h2>
 * </div>
 * <div id="child2">
 * <h1>I am honey singh</h1>
 * <h2>I am learning react basics</h2>
 * </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am Rahul Singh!!"),
    React.createElement("h2", {}, "I am Learning React!!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am Honey Singh!!"),
    React.createElement("h2", {}, "I am learing React basics"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const header = React.createElement(
//   "h1",
//   { id: "Joker", xyz: "abc" },
//   "Againnnnn"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
