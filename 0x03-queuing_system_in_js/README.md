# Resources

Read or watch:

- [Redis quick start](https://redis.io/topics/quickstart)
- [Redis client interface](https://redis.io/topics/clients)
- [Redis client for Node JS](https://github.com/NodeRedis/node-redis)
- [Kue (deprecated but still used in the industry)](https://github.com/Automattic/kue)
- sudo find / -name "dump.rdb"

# Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to run a Redis server on your machine
- How to run simple operations with the Redis client
- How to use a Redis client with Node JS for basic operations
- How to store hash values in Redis
- How to deal with async operations with Redis
- How to use Kue as a queue system
- How to build a basic Express app interacting with a Redis server
- How to build a basic Express app interacting with a Redis server and queue

# Summary

## Redis Quick Start

Redis is an in-memory data structure store, used as a database, cache, and message broker. To get started with Redis, you need to install it on your machine and run the Redis server. You can then use the Redis CLI to interact with the server and perform basic operations like setting and getting values.

## Redis Client Interface

Redis clients are available for various programming languages. These clients provide an interface to interact with the Redis server. The client interface allows you to perform operations like connecting to the server, executing commands, and handling responses.

## Redis Client for Node JS

The `node-redis` library is a popular Redis client for Node.js. It allows you to perform Redis operations from your Node.js applications. You can install it using npm and use it to connect to the Redis server, perform CRUD operations, and handle asynchronous operations.

## Kue

Kue is a priority job queue backed by Redis, built for Node.js. Although it is deprecated, it is still widely used in the industry. Kue allows you to create job queues, process jobs, and manage job lifecycles. It provides a simple API for creating and processing jobs, and a web interface for monitoring job status.

## Learning Objectives in Detail

1. **Running a Redis Server**: You should be able to install Redis on your machine and start the Redis server using the command `redis-server`.
2. **Simple Operations with Redis Client**: You should know how to use the Redis CLI or a Redis client library to perform basic operations like `SET`, `GET`, `DEL`, etc.
3. **Using Redis Client with Node JS**: You should be able to use the `node-redis` library to connect to a Redis server from a Node.js application and perform basic operations.
4. **Storing Hash Values**: You should understand how to use Redis hash data structures to store and retrieve hash values.
5. **Async Operations with Redis**: You should be familiar with handling asynchronous operations in Redis using callbacks, promises, or async/await.
6. **Using Kue as a Queue System**: You should know how to use Kue to create and process job queues in a Node.js application.
7. **Building a Basic Express App with Redis**: You should be able to build a simple Express application that interacts with a Redis server for data storage and retrieval.
8. **Express App with Redis and Queue**: You should be able to build an Express application that uses both Redis for data storage and Kue for job queue management.

Sources:

- [Redis quick start](https://redis.io/topics/quickstart)
- [Redis client interface](https://redis.io/topics/clients)
- [Redis client for Node JS](https://github.com/NodeRedis/node-redis)
- [Kue (deprecated but still used in the industry)](https://github.com/Automattic/kue)
