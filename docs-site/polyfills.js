// Polyfills for Node.js modules in browser/static generation environment
if (typeof global === 'undefined') {
  var global = globalThis;
}

if (typeof process === 'undefined') {
  global.process = require('process/browser');
}

if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer;
}

// EventEmitter polyfill
if (typeof EventEmitter === 'undefined') {
  global.EventEmitter = require('events').EventEmitter;
}

// Export for ES modules
export const EventEmitter = require('events').EventEmitter;
export const Buffer = require('buffer').Buffer;
export const process = require('process/browser');

// Ensure global is available in all environments
if (typeof window !== 'undefined') {
  window.global = global;
}
