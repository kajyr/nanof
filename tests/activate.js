import test from "ava";
const $k = require("..");

test("basic controller test", function(t) {
  document.body.innerHTML = `<div>
    <div controller="hallo">
      <p>Hello world</p>
    </div>
    <p>Other Text</p>
  </div>`;

  $k.activate("hallo", ($, element) => {
    t.true(typeof element === "object", "Controller element is defined");
    t.is(
      element.textContent.trim(),
      "Hello world",
      "Element inner text is Hello world"
    );
    t.is($("p").length, 1, "Local selector finds 1 p element");
  });
});
