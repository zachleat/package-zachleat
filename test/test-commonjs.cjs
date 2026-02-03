const assert = require("node:assert/strict");
const test = require("node:test");
const { default: zachleat } = require("../src/index.js");

test("Status", t => {
  assert.ok(true);
});

test("Output", t => {
  zachleat();
  assert.ok(true);
});