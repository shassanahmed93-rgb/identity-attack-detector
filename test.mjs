import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {analyze} from "./analyze.mjs";
const sample = JSON.parse(readFileSync(new URL("./fixture.json", import.meta.url)));
assert.deepEqual(analyze(sample)["count"], 1);
console.log("Fixture passed");
const comparison = {
  "events": [
    {
      "user": "demo-user",
      "time": 1,
      "result": "failure"
    },
    {
      "user": "demo-user",
      "time": 2,
      "result": "failure"
    },
    {
      "user": "demo-user",
      "time": 3,
      "result": "failure"
    },
    {
      "user": "demo-user",
      "time": 400,
      "result": "success"
    }
  ]
};
assert.deepEqual(analyze(comparison)["count"], 0);
console.log("Comparison fixture passed");
