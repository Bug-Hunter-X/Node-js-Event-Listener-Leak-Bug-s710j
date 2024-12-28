# Node.js Event Listener Leak Bug

This repository demonstrates a common yet easily overlooked error in Node.js applications: event listener leaks.  Event listeners, if not properly managed, can lead to memory leaks, especially in long-running processes such as servers.

## Bug Description
The `bug.js` file contains a simple HTTP server.  The issue lies in the lack of removing event listeners once they're no longer needed.  This leads to a memory leak as the server continuously adds listeners for each incoming request.

## How to Reproduce
1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Send multiple requests to the server (e.g., using `curl`).
5. Observe the memory usage of the Node.js process; it will continue to grow.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle event listeners; remove listeners when appropriate. This prevents memory leaks.

## Lessons Learned
- Always remove event listeners when they are no longer needed to prevent memory leaks.
- Consider using techniques like event emitter's `once` method for listeners that should only fire once.
- Employ memory monitoring tools to detect memory leaks in your applications.