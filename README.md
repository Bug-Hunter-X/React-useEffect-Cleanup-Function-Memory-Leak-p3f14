# React useEffect Cleanup Function Memory Leak

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function to prevent memory leaks.  The `bug.js` file contains the problematic code, while `bugSolution.js` shows the corrected version.

## Problem

When using `useEffect` with asynchronous operations like `fetch`, it's crucial to return a cleanup function.  This function is responsible for canceling or cleaning up any side effects before the component unmounts or the dependency array changes.

Without the cleanup function, the `fetch` request will continue even after the component is unmounted, which could lead to memory leaks, especially if repeated often.

## Solution

The solution involves adding a return statement within the `useEffect` to include a function that will cancel the `fetch` request if it's still in progress (or handle any relevant cleanup).

This example uses `AbortController` for a more robust approach.