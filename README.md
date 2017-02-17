# ultra minimalist framework

## usage

```
import $k from 'nanof'
```

## activate

Activate is a function to bind a js module to a DOM element.

The function takes as a parameter the module / controller name and a js module ( a function ).

The frameworks expects that there is at least an HTML element with the controller attribute set.

The function will receive as parameters a `$` function bound to the root element and the root element.
If there are multiple elements referring the same controller, the module will be activated once for element.


```html

<div controller="my-cool-app">
...
</div>

```

```javascript

$k.activate('my-cool-app', function($, element) {
    // ...
})

```