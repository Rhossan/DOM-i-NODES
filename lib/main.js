const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = (arg) => {
  switch (typeof arg) {
    case "string":
      return getNodesList(arg);
    case "object":
      if (arg instanceof HTMLElement)
        return new DOMNodeCollection([arg]);
  };
};

getNodesList = (selector) => {
  const nodes = document.querySelectorAll(selector);
  const nodesArray = Array.from(nodes);
  return nodesArray;
}
