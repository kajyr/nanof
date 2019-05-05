const dom = require("./src/dom");
const array = require("./src/array");

const { $, list } = dom;

/*
  Esegue tutti i controller trovati in pagina
*/
const activate = (controller_name, controller) =>
  $(`[controller="${controller_name}"]`).forEach(elem =>
    controller(selector => $(selector, elem), elem)
  );

const on = (nodes, event, fn) => {
  return list(nodes).map(elem => {
    elem.addEventListener(event, fn, false);
    return elem;
  });
};

module.exports = {
  activate,
  on,
  ...dom,
  ...array
};
