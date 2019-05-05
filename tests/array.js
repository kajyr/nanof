import test from "ava";
const { unique } = require("../src/array");

test("Unique", function(t) {
  const elems = ["A", "B", "C", "C"];
  t.deepEqual(unique(elems), ["A", "B", "C"]);
});
