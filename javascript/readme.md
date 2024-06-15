# Javascript interview-questions

## 1. What is Javascript?
Javascript is a high-level, interpreted (execute line by line) programming language, widely used in web development.

## 2. What is the execution context in JavaScript?
Execution context is an environment where the javascript code is executed. It has two sections: memory component (known as variable environment) and code component (threads of execution)

```javascript
var a; // declaring a
console.log(a); // output: undefined
a=10
console.log(a)
```
So when this code runs, then the Global execution context is created and in the memory components first the variable 'a' is allocated with a memory, and the value is set to 'undefined'. 

After memory allocation is done, then line-by-line code is executed in the first log 'undefined' will show as it has no other value, then in next line 'a=10', so the log will print as 10
![diagram-export-14-06-2024-16_53_13](https://github.com/arpan8/interview-questions/assets/41347230/a382f985-d991-46b9-9b46-e0ebc727cf16)


## 3. Types of execution context in JavaScript?
 - Global execution context: It is created when js code starts running, it represents the global scope and global object(e.g window in browser). The 'this' keyword mainly refers to the global object.
 - Functional Execution context: It is created whenever a function is called or invoked. Each function call generates a new execution context. The 'this' keyword within a function context refers to the object that is invoked in that function.
 - Eval execution context: Created when the 'eval' function is used to execute a string of code. This execution context is generally avoided due to security and performance issues.

 ## 4. What is the shortest js program?
 An empty javascript file is the shortest JS program.

 ## 5. Code example of how execution context works.
```javascript
var n=2
function square(num){
    var ans = num * num
    return ans
}
var sq1 = square(n)
var sq2 = square(4)
```
The execution context is created with 2 phases, **Memory creation phase and code execution phase**.
So when this example code starts running, 1st phase, the **memory creation phase** started, so in the code ---

- **n: undefined** // undefined is a special keyword to show that the variable is not empty, but has a special default value.

Next comes the function

- __square: {...}__ // function square(num){
    var ans = num *num
    return ans
}

For function, the whole code is stored in the memory

- **sq1: undefined**
- **sq1: square(n)** // when the function is invoked
- **sq1: 4** // after getting the result from the function and functional execution context is removed automatically

- **sq2: undefined**
- **sq2: square(4)**  // when the function is invoked
- **sq2: 16** // after getting the result from the function and functional execution context is removed automatically

Now the **code execution phase** starts

**var n =2** // now the undefined value will be replaced by the value of n i.e. 2
Then comes the function definition, nothing to do here, so go to the next line

**Now the function invocation or call happens in the line sq1 = square(n), so for function invocation a new mini program starts and a new execution context is created under the global execution context**

In that particular execution context again 2 phases will come memory phase and code execution phase in the result, the **ans variable** returns the value and then the execution context is deleted

**For the next function invocation, the same thing will happen i.e., creation of a new execution context, and after return the result execution context will be deleted**

*Atlast when all the code is executed, then global execution is automatically deleted*

![diagram-export-15-06-2024-13_05_28](https://github.com/arpan8/interview-questions/assets/41347230/8f00891b-adfa-4182-b29b-54cd40850548)

## 6. What is call stack?
When a javascript program starts execution, then a stack is also populated with the global execution context and the global execution context is stored in that stack, also when a function is invoked, then a new execution context is generated and it is placed in the stack. after the function returns its value the execution context will be removed automatically, by **popping** from the stack. When the whole js program execution is completed then the global execution context is also removed from the stack by pop.

![diagram-export-15-06-2024-13_42_21](https://github.com/arpan8/interview-questions/assets/41347230/224a498a-b79a-43d9-bacc-86d83eb6f48b)


