var assert = require('assert');
import {deepClone, registerClass} from '../js/deepClone.js'; 


it('clone a object', () => {
  let o1 = {a: 1, b: {x: 2}};
  let o2 = deepClone(o1);
  assert.equal(JSON.stringify(o1), JSON.stringify(o2));
  assert.notEqual(o1, o2);
  assert.notEqual(o1.b, o2.b); 
}) 

it('clone a object with circular reference', () => {
  let o1 = {a: 1, b: {x: 2}};
  o1.c = o1;
  let o2 = deepClone(o1);
  assert.equal(o2.c, o2);
  assert.notEqual(o1, o2);
  assert.notEqual(o1.b, o2.b); 
}) 

it('clone a object with prototype', () => {
  function Cls() {
    this.a = 1;
  }
  Cls.prototype.b = 2;
  let o1 = new Cls;
  let o2 = deepClone(o1);
  assert.equal(o1.a, o2.a);
  assert.equal(o1.b, o2.b);
  assert(!o2.hasOwnProperty('b')); 
}) 

it('clone a object with property with enumberable:false', () => {
  let o1 = {};
  Object.defineProperty(o1, 'a', {
    value: 1,
    enumberable: false,
    configurable: true,
    writable: true,
  })
  let o2 = deepClone(o1);
  for(let p in o2) {
    assert(false);
  }
})

it('clone a object with null property', () => {
  let o1 = {a: null, b: {x: 2}};
  let o2 = deepClone(o1);
  assert.notEqual(o1, o2);
  assert.notEqual(o1.b, o2.b); 
}) 

it('clone a frozen object', () => {
  let o1 = {a: 1, b: {x: 2}};
  Object.freeze(o1);
  let o2 = deepClone(o1);
  assert(Object.isFrozen(o2));
})

it('clone a sealed object', () => {
  let o1 = {a: 1, b: {x: 2}};
  Object.seal(o1);
  let o2 = deepClone(o1);
  assert(Object.isSealed(o2));
})

it('clone a unextensible object', () => {
  let o1 = {a: 1, b: {x: 2}};
  Object.preventExtensions(o1);
  let o2 = deepClone(o1);
  assert(!Object.isExtensible(o2));
})

it('clone a array', () => {
  let o1 = [];
  o1.length = 3;
  let o2 = deepClone(o1);
  assert.equal(JSON.stringify(o1), JSON.stringify(o2));
  assert.notEqual(o1, o2);
}) 

it('clone a String Object', () => {
  let o1 = new String('abc');
  let o2 = deepClone(o1);

  assert.equal(JSON.stringify(o1), JSON.stringify(o2));
  assert.notEqual(o1, o2);
  assert.equal(o2.valueOf(), 'abc');
}) 

it('clone a Function Object', () => {
  let o1 = function(a, b) { return a + b};
  let o2 = deepClone(o1);

  assert.notEqual(o1, o2);
  assert.equal(o2(1, 2), 3);
}) 

it('register a new class', () => {
  registerClass((source, type, toStringResult, prototype) => 
    prototype === Symbol.prototype,
    source => new Object(source.valueOf())
  )
  let o1 = new Object(Symbol('abc'));
  let o2 = deepClone(o1);

  assert.notEqual(o1, o2);
  assert.equal(o2.constructor, Symbol);
}) 

it('clone a str', () => {
  let o1 = 'abc';
  let o2 = deepClone(o1);

  assert.equal(o1, o2);
}) 