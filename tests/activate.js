const test = require('tape');
const { JSDOM } = require("jsdom");
const F = require('..');


const { window } = new JSDOM(`<!DOCTYPE html>
	<html>
		<body>
			<div controller="hallo"><p>Hello world</p></div>
			<p>Other Text</p>
		</body>
	</html>`);
global.document = window.document

test('basic controller test', function (t) {
    
    
    F.activate('hallo', ($, element) => {
    	t.ok(typeof element === 'object', 'Controller element is defined');
    	t.equal(element.textContent, 'Hello world', 'Element inner text is Hello world');
    	t.equal($('p').length, 1, 'Local selector finds 1 p element');
    	t.end();
    })
   
});
