import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, subtract } from './math.js';

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('subtract handles positive, negative and zero operands', () => {
  assert.equal(subtract(5, 3), 2);
  assert.equal(subtract(-5, -3), -2);
  assert.equal(subtract(5, -3), 8);
  assert.equal(subtract(-5, 3), -8);
  assert.equal(subtract(5, 0), 5);
  assert.equal(subtract(0, 5), -5);
  assert.equal(subtract(0, 0), 0);
});
