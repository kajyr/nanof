$ = (selector, scope = document) -> Array.prototype.slice.call(scope.querySelectorAll(selector))

###
	Esegue tutti i controller trovati in pagina
###
activate = (controller_name, controller) ->
	for elem in $('[controller="'+controller_name+'"]')
		local$ = (selector) -> $(selector, elem)
		controller(local$, elem)

module.exports = {
	activate: activate
	on: (list, event, fn) ->
		elem.addEventListener(event, fn, false) for elem in Array.prototype.concat(list)	
		list
}
