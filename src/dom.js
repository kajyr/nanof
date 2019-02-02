/**
 * Dom selector function
 * @param {string} selector
 * @param {DOMNode} scope
 */
function $(selector, scope = document.body) {
  return Array.prototype.slice.call(scope.querySelectorAll(selector));
}

/**
 * Maps a iterable list of DOMNodes to an array
 * @param {*} elems
 */
function list(elems) {
  if (Array.isArray(elems)) {
    // it might be already an array
    return elems;
  } else if (elems.nodeName) {
    // it might be a single element
    return [elems];
  }
  // it might be something else similar to an array, like a NodeList or an HTMLCollection
  return Array.prototype.slice.call(elems);
}

const classes = className => className.trim().split(" ");

function mapElementsClasses(elements, className, fn) {
  const listOfClasses = classes(className);

  list(elements).forEach(element => {
    listOfClasses.forEach(c => fn(element, c));
  });
  return elements;
}

/**
 * Adds one or more class to one or more elements.
 * @param {DOMNode|NodeList|Array} elements
 * @param {string} className
 * @returns {*}
 */
function addClass(elements, className) {
  return mapElementsClasses(elements, className, (elem, c) =>
    elem.classList.add(c)
  );
}

function removeClass(elements, className) {
  return mapElementsClasses(elements, className, (elem, c) =>
    elem.classList.remove(c)
  );
}

module.exports = {
  $,
  list,
  addClass,
  removeClass
};
