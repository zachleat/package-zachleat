const test = require("ava");
const zachleat = require("../")

test("Status", t => {
  t.true(true, "Everything is fine.");
});

test("Output", t => {
  zachleat();
  t.true(true);
});