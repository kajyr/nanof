const $ = (selector, scope = document.body) => Array.prototype.slice.call(scope.querySelectorAll(selector));


/*
  Esegue tutti i controller trovati in pagina
*/
const activate = (controller_name, controller) =>
	$(`[controller="${controller_name}"]`).forEach(elem => controller(selector => $(selector, elem), elem));

const on = (list, event, fn) => {
	for (let i = 0; i < list.length; i++) {
		list[i].addEventListener(event, fn, false);
	}
	return list;
}

module.exports = {
  activate,
  on
};
