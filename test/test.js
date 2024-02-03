import assert from "node:assert/strict";
import test from "node:test";
import zachleat from "../src/index.js";

test("Status", t => {
	assert.ok(true);
});

test("Output", t => {
	zachleat();
	assert.ok(true);
});