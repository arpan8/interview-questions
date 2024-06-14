# Javascript interview-questions

## 1. What is javascript ?
Javascript is a high level, interpreted (execute line by line) programming language, widely used in the web development.

## 2. What is execution context in javascript ?
Execution context is a environment where the javascript code is executed. It has two sections: memory component (known as variable environment) and code component (threads of execution)

```javascript
var a; // declaring a
console.log(a); // output: undefined
a=10
console.log(a)
```
So when this code runs, then Global execution context is created and in the memory components first the variable 'a' is allocated with a memory and value is set to 'undefined'. 

After memory allocation done then, line by line code is executed then in the first log 'undefined' will show as it has no other value, then in next line 'a=10', so the log will print as 10
![diagram-export-14-06-2024-16_53_13](https://github.com/arpan8/interview-questions/assets/41347230/a382f985-d991-46b9-9b46-e0ebc727cf16)


## 3. Types of execution context in javascript ?
 - Global execution context: It is created when js code starts running, it represents the global scope and global object(e.g window in browser). The 'this' keyword mainly refers to the global object.
 - Functional Execution context: It is created whenver a function is called or invoked. Each function call generates new execution context. The 'this' keyword within a function context refers to the object which is invoked in that function.
 - Eval execution context: Created when the 'eval' function is used to execute a string of code. This execution context generally avoided due to the security and performance issues.

 ## 4. What is the shortest js program ?
 A empty javascript file is the shortest js program.