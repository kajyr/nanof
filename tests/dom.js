import test from "ava";
const { $, addClass, removeClass, list } = require("../src/dom");

test.beforeEach(t => {
  document.body.innerHTML = `<div>
    <div id="first" class="foo">
      <p>Hello world</p>
    </div>
    <p>Other Text</p>
  </div>`;
});

test("Selector", function(t) {
  const elems = $("#first");
  const elem = elems[0];
  t.is(elems.length, 1);
  t.is(elem.id, "first");
});

test("Selector - empty", function(t) {
  t.is($("#none").length, 0);
  t.is($().length, 0);
});

test("list", function(t) {
  const divs = list(document.querySelectorAll("div"));
  const elem = list(document.getElementById("first"));
  const str = list("prova");

  t.true(Array.isArray(divs));
  t.true(Array.isArray(elem));
  t.true(Array.isArray(str));
});

test("addClass", function(t) {
  addClass($("#first"), "foo provina");
  addClass(document.querySelectorAll("#first"), "bar");

  const elem = document.getElementById("first");
  t.true(elem.classList.contains("foo"));
  t.true(elem.classList.contains("provina"));
});

test("removeClass", function(t) {
  removeClass($("#first"), "foo provina");

  const elem = document.getElementById("first");
  t.false(elem.classList.contains("foo"));
  t.false(elem.classList.contains("provina"));
});
