// Polyfills for Node.js modules in browser/static generation environment
import process from 'process/browser'
import { Buffer } from 'buffer'
import { EventEmitter } from 'events'

// Initialize global scope first with proper fallbacks
const root = typeof globalThis !== 'undefined' ? globalThis :
             typeof window !== 'undefined' ? window :
             typeof global !== 'undefined' ? global :
             typeof self !== 'undefined' ? self : {};

// Assign to global if it doesn't exist
if (typeof global === 'undefined') {
  root.global = root;
}

// Initialize globals
root.process = process
root.Buffer = Buffer
root.EventEmitter = EventEmitter

// Export for ES modules
export { EventEmitter, Buffer, process }
