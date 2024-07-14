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