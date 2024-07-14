# node js interview-questions

## 1. What is the role of framework ?
Role of the framework is to simplify the creation of large application, by providig many reusable classes, functions and library etc.

## 2. What is runtime enviornment ?
A runtime enviornment is a enviornment that executes the program. 
e.g cpython is the runtime enviornment for django framework to execute the python.
like this JVM is for spring framework, CLR is for dotnet framework.

So runtime environment is responsible for memory management, I/O operations and converting the high level language (JAVA,Javascript) to lower level language (machine language), which system can understand.

## 3. What is a framwork ?
A structure that simplifies the development process, by offering structured set of tools, libararies, best practices, reusable classes and functions. This structure is called Framework. The framework is just like a wrapper over the runtime environment.
e.g. Javascript has framework Angular, Vue. React is a library of javascript. Node js is a runtime environment of javascript.

## 4. What is nodejs ?
Nodejs is a runtime enviornment to execute the javascript code on the server side, It is open source, cross platform, single-threaded, non blocking and has event driven architechture.

## 5. What is V8 ?
V8 is a javascript engine, chorme has the V8, Edge has chakra, firefox has spider monkey

## 6. What are the key features of node js ?
- **Asynchronous & Non-Blocking**
- **Single threaded**
- **Event driven**
- **V8 Javascript engine**
- **Cross platform**
- **NPM(Node Package Manager)**
- **Real time capabilities**

## 7. What is Single Threaded Programming ?
A single-threaded program contains only one main thread of execution. It processes tasks sequentially, one after the other. Single-threaded programs are straightforward and easy to reason about, making them suitable for simple applications with limited concurrency requirements.

## 8. What is Synchronous programing ?
Synchronous programming is a programming model where operations take place sequentially.i.e. each task is performed one after another, and waits for previous task to complete before going to the next task.

## 9. What is Asynchronous programming ?
Asynchronous programming is a programming paradigm that allows tasks to run independently of the main program flow, enabling non-blocking operations and improving efficiency, especially in I/O-bound and high-latency operations.

So in nodejs in a single thread mutiple tasks are executing, when a task finishes its execution then it creates a event, and that event is listened by thread then it will send its response, so like this way asynchronously the tasks are handled and it does not block any operation.

## 10. What is the difference between node js and express js?
Node js is a runtime javascript engine that executes javascript code apart from browser.

Express js is a framework of nodejs. It simplifies the process of creating api routes, middleware etc. So this express js is a wrapper over the nodejs.

## 11. Create a nodejs server.

```javascript
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```
## 12. What are events, event emitter, event queue, event loop and event architechture?
- **Event**: An event in Node.js is a signal that something has happened in the application, such as a user action, a change in state, or a system occurrence. Events are used to trigger specific actions within the application.

Suppose you have a server that logs user activities. An event could be a user logging in or out. When the login event occurs, the server logs the user's information and updates the session.

- **Event Emitters**: Event Emitters are objects that facilitate the creation and management of events. They allow you to define events and listeners that will execute code in response to those events.

In the chat application, the server can act as an event emitter. When a new message is received, the server emits an event named messageReceived.
```javascript
const EventEmitter = require('events');
class ChatServer extends EventEmitter {}

const chatServer = new ChatServer();

// Emitting an event
chatServer.emit('messageReceived', 'Hello, world!');

```
- **Event Listeners**: Event Listeners are functions that wait for an event to occur then responds to it. They are registered with event emitters.

Continuing with the chat application, you can define an event listener that reacts to the messageReceived event.
```javascript
chatServer.on('messageReceived', (message) => {
  console.log(`New message: ${message}`);
});

```
- **Event queue**: The event queue is a data structure that holds all the events that have been triggered but not yet processed. It ensures that events are processed in the order they were received.

In the chat application, if multiple users send messages at the same time, these messages are placed in the event queue.

- **Event Loop**: Event loop has one job, its just continuously monitoring **call stack**, **callback queue or event queue**, and **microtask queue**. When the call stack is empty event loop checks the **callback queue or event queue** and **microtask queue** for any function present in there or not. If any function present in the call back queue or **microtask queue**, event loop will send the function to the call stack.

**Microtask queue** has ***higher priority*** than **callback queue or event queue**, so when call stack is empty event loop first check the **microtask queue**, if **microtask queue** is empty then checks the **callback queue or event queue**.

So event loop is just like a gate keeper between call stack and **callback queue or event queue**, **microtask queue**.

*Which callback function go to microtask queue?*
All the callback function which comes through **promises** will go inside **microtask queue**. There is another thing known as **mutation observer**.
*Which callback functions go to callback queue?*
All the callbacks coming from the **setTimeout()** or the **events genrated during varioius tasks** will go the **callback queue or event queue**

The event loop in the chat application ensures that messages are processed one by one, allowing the server to handle multiple messages from different users efficiently.

- **Event-Driven Architecture**: An event-driven architecture is a design paradigm where the flow of the program is determined by events. It is highly suitable for applications that require real-time interactions.

The entire chat application can be seen as an event-driven system, where user interactions (sending and receiving messages) drive the behavior of the application.

## 13. Show some of the examples from where events, event emitter, event queue, event loop and event architechture can be understood.

 ***File Upload Processing***

 ```javascript
const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const uploadFile = (req, res) => {
    const filePath = './uploads/file.txt';
    const writeStream = fs.createWriteStream(filePath);

    req.pipe(writeStream);
    req.on('end', () => {
        eventEmitter.emit('fileUploaded', filePath);
        res.end('File uploaded');
    });
};

//event listener
eventEmitter.on('fileUploaded', (filePath) => {
    console.log(`File saved to ${filePath}`);
    //emits event
    eventEmitter.emit('generateThumbnail', filePath);
});

//event listener
eventEmitter.on('generateThumbnail', (filePath) => {
    console.log(`Generating thumbnail for ${filePath}`);
    // Thumbnail generation logic here
    //emits event
    eventEmitter.emit('updateDatabase', filePath);
});

//event listener
eventEmitter.on('updateDatabase', (filePath) => {
    console.log(`Updating database for ${filePath}`);
    // Database update logic here
});

const server = http.createServer(uploadFile);
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

 ```

 ***Monitoring System***

 ```javascript
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const monitorCPUUsage = () => {
    const cpuUsage = Math.random() * 100; // Simulate CPU usage
    console.log(`Current CPU usage: ${cpuUsage}%`);

    if (cpuUsage > 80) {
        eventEmitter.emit('highCPUUsage', cpuUsage);
    }
};

eventEmitter.on('highCPUUsage', (cpuUsage) => {
    console.log(`Alert! High CPU usage detected: ${cpuUsage}%`);
    // Additional alerting logic here
});

setInterval(monitorCPUUsage, 1000);

 ```

 ***Notification System***

 ```javascript
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const notifyUser = (notification) => {
    console.log(`Sending notification to user: ${notification}`);
    // Notification sending logic here
};

eventEmitter.on('newMessage', (message) => {
    const notification = `You have a new message: ${message}`;
    notifyUser(notification);
});

eventEmitter.on('systemUpdate', (update) => {
    const notification = `System update: ${update}`;
    notifyUser(notification);
});

// Simulate events
eventEmitter.emit('newMessage', 'Hello, world!');
eventEmitter.emit('systemUpdate', 'Version 1.2.3 released');

 ```

 ***Real time chat applications***

**File: chat.js**

 ```javascript
const EventEmitter = require('events');

class Chat extends EventEmitter {}

const chat = new Chat();

module.exports = chat;

```

**File: server.js**
```javascript
const http = require('http');
const socketIo = require('socket.io');
const chat = require('./chat'); // Import the chat event emitter

const server = http.createServer((req, res) => {
    res.end('Chat server running');
});

const io = socketIo(server);

// Listen for new connections
io.on('connection', (socket) => {
    console.log('User connected');

    // Emit join event when a user connects
    chat.emit('join', 'User');

    // Listen for message event from client
    socket.on('message', (msg) => {
        chat.emit('message', msg);
    });

    // Event listener for the join event
    chat.on('join', (user) => {
        socket.broadcast.emit('message', `${user} joined the chat`);
    });

    // Event listener for the message event and broadcast it to all clients
    chat.on('message', (msg) => {
        io.emit('message', msg);
    });

    // Emit leave event when a user disconnects
    socket.on('disconnect', () => {
        chat.emit('leave', 'User');
    });

    // Event listener for the leave event
    chat.on('leave', (user) => {
        io.emit('message', `${user} left the chat`);
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

```
## 14. What is NPM?
NPM (Node package manager) is package manager of javascript, it manages all the packages and its dependency in a node project.

## 15. What is role node_modules folder?
In the node_modules folder all the packages and sub packages are stored which are used in a particular node project.

## 16. What is the role package.json?
package.json consists of all the information of a project, like name, description, version, scripts, author, license, dependencies.
In the script we can customize the script and in the dependencies all the packages and its versions are mentioned, same in the dev dependencies.

## 17. What is the difference between dependencies and dev dependencies?
**Dependencies**: These are the packages that are required for the project to run in a production or deployment environment. They are necessary for the application’s core functionality and are typically required at runtime. When you install the project dependencies using **npm install**, the packages listed in the dependencies section are installed.

**Dev Dependencies**: These are the packages that are only required during development, such as testing frameworks, build tools, and development-specific utilities. They are not necessary for the application to run in a production environment but are helpful during development and testing phases. When you install the project dependencies along with dev dependencies using **npm install**, the packages listed in both the dependencies and devDependencies sections are installed.

```javascript
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.10.17"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "eslint": "^7.28.0",
    "mocha": "^9.0.1"
  }
}
```
## 18. What is modules in nodejs? What is the difference between modules and functions?
A module is a reusable block of code. It can include a set of functions, classes, objects, or variables.
In nodejs a js file can be treated as module.

A function is block of codes designed to perform a particular task. 
The functions contain inside a module.

```javascript
// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

// app.js
const math = require('./math');
console.log(math.add(2, 3)); // Outputs: 5

```
## 19. How many ways are there to export a module?
- module.exports = function name
- exports.function name ={}

## 20. What will happen if the modules are not exported?
If the modules are not exported then inside the modules all the functions, variables, objects, class can not be called outside the module.

## 21. What is module wrapper function in nodejs?
The module wrapper function is a concept in Node.js that refers to the function that wraps the code of a module before it is executed. This function is used to encapsulate the module code and provide a private scope for its variables and functions.

When Node.js loads a module, it wraps the module code in a function before executing it. This function is called the “module wrapper function” and is used to encapsulate the module code. The module wrapper function has the following structure:

```javascript
(function (exports, require, module, __filename, __dirname) {
  // module code
})
```
## 22. What is require? Difference between import and require.
Require() is a built-in function in Node.js used to load modules. It takes the module’s path as an argument and returns the exported content of the module. Require() is synchronous, meaning it loads modules one after another, blocking the execution until the module is loaded.

Import() is a feature introduced in ES6. It is used to import modules into a JavaScript file. Import() is asynchronous, meaning it loads modules in parallel, without blocking the execution.

Difference between require() and import() is that require() can be called from anywhere inside the program, whereas import() cannot be called conditionally, it always runs at the beginning of the file.

To use the require() statement, a module must be saved with .js extension as opposed to .mjs when the import() statement is used.

ES modules can be loaded dynamically via the import() function unlike require().

```javascript
// Using require()
var myModule = require('./myModule.js');
console.log(myModule.exports);  // Output: "Hello Geek"

// Using import()
import myModule from './myModule.js';
console.log(myModule);  // Output: "Hello Geek"
```
 