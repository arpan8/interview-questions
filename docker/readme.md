https://medium.com/@rajani103/day-21-docker-important-interview-questions-6519b220cb46

https://www.toptal.com/docker/interview-questions

https://www.geeksforgeeks.org/docker-interview-questions/

https://www.linkedin.com/pulse/day-21-docker-important-interview-questions-kartik-bhatt-xp5pc/

https://www.turing.com/interview-questions/docker

https://github.com/Devinterview-io/docker-interview-questions

https://github.com/collabnix/dockerlabs/blob/master/docker/docker-interview-questions.md

https://github.com/mrbardia72/docker-Interview-Questions-and-Answers/tree/main

https://github.com/mrbardia72/docker-Interview-Questions-and-Answers/blob/main/docker-compose.md

https://github.com/kunal-gohrani/docker-interview-questions

https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593


# Docker interview questions

### 1. What is Docker?

In simple words Docker is a virtualization software that makes developing and deploying applications very easy much easier compared to how it was done before Docker was introduced and Docker does that by packaging an application into something called a container that has everything the application needs to run like the application code itself its libraries and dependencies but also the runtime and environment configuration so application and its running environment are both packaged in a single Docker package which you can easily share and distribute.

### 2. How does development process happens before docker ?

when you have a team of developers working on some application they would have to install all the services that application depends on or needs like database services Etc directly on their operating system right for example if you're developing a JavaScript application and you need a postgresql database maybe you
need a redis for caching kafka for messaging like you have a microservices application now you need all these services locally on your development environment so you can actually develop and test the application right and every developer in the team would then have to go and install all those services
configure and run them on their local development environment and depending on which operating system they're using the installation process will be different because installing postgresql database on Mac OS is different from installing it on a Windows machine for example another thing with installing Services directly on an operating system following some installation guide is that you usually have multiple steps of installation and then configuration of the service so with multiple commands that you have to execute to install configure and set up the service the chances of something going wrong and error happening is actually pretty high and this approach or this process of setting up a development environment for a developer can actually be pretty tedious depending on how complex your application is for example if you have 10 services that your application is using then you would have to do that installation 10 times for each service and again it will differ within the team based on what operating system each developer is using