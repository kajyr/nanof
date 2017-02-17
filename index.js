(function() {
  var $, activate;

  $ = function(selector, scope) {
    if (scope == null) {
      scope = document;
    }
    return Array.prototype.slice.call(scope.querySelectorAll(selector));
  };


  /*
  	Esegue tutti i controller trovati in pagina
   */

  activate = function(controller_name, controller) {
    var elem, i, len, local$, ref, results;
    ref = $('[controller="' + controller_name + '"]');
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      elem = ref[i];
      local$ = function(selector) {
        return $(selector, elem);
      };
      results.push(controller(local$, elem));
    }
    return results;
  };

  window.$k = {
    activate: activate,
    on: function(list, event, fn) {
      var elem, i, len, ref;
      ref = Array.prototype.concat(list);
      for (i = 0, len = ref.length; i < len; i++) {
        elem = ref[i];
        elem.addEventListener(event, fn, false);
      }
      return list;
    }
  };

}).call(this);
