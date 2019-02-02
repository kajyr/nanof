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

/**
 * Adds one or more class to one or more elements.
 * @param {DOMNode|NodeList|Array} elements
 * @param {string} className
 * @returns {*}
 */
function addClass(elements, className) {
  const listOfClasses = className.trim().split(" ");

  list(elements).forEach(element => {
    listOfClasses.forEach(c => element.classList.add(c));
  });
  return elements;
}

module.exports = {
  $,
  list,
  addClass
};
