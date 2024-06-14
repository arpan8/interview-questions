# Javascript interview-questions

## 1. What is javascript ?
Javascript is a high level, interpreted (execute line by line) programming language, widely used in the web development.

## 2. What is execution context in javascript ?
Execution context is a environment where the javascript code is executed.

## 3. Types of execution context in javascript ?
 - Global execution context: It is created when js code starts running, it represents the global scope and global object(e.g window in browser). The 'this' keyword mainly refers to the global object.
 - Functional Execution context: It is created whenver a function is called or invoked. Each function call generates new execution context. The 'this' keyword within a function context refers to the object which is invoked in that function.
 - Eval execution context: Created when the 'eval' function is used to execute a string of code. This execution context generally avoided due to the security and performance issues.