
var simpletree = require('../'),
    assert = require('assert');
	
var tree = new simpletree.Tree();

assert.equal(tree.getData('/'), null);

tree.createNode('/node1', { data: 1 });

var result = tree.getData('/node1');
assert.ok(result);
assert.ok(result.data);
assert.equal(result.data, 1);

tree.setData('/node1', { data: 2 });

result = tree.getData('/node1');
assert.ok(result);
assert.ok(result.data);
assert.equal(result.data, 2);
