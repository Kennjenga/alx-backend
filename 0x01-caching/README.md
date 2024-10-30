# Caching System

## Resources

Read or watch:

- [Cache replacement policies - FIFO](https://en.wikipedia.org/wiki/Cache_replacement_policies#First_In_First_Out_%28FIFO%29)
- [Cache replacement policies - LIFO](https://en.wikipedia.org/wiki/Cache_replacement_policies#Last_In_First_Out_%28LIFO%29)
- [Cache replacement policies - LRU](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_Recently_Used_%28LRU%29)
- [Cache replacement policies - MRU](https://en.wikipedia.org/wiki/Cache_replacement_policies#Most_Recently_Used_%28MRU%29)
- [Cache replacement policies - LFU](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least-Frequently_Used_%28LFU%29)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

### General

- What a caching system is
- What FIFO means
- What LIFO means
- What LRU means
- What MRU means
- What LFU means
- What the purpose of a caching system
- What limits a caching system have

## General Information

### What is a Caching System?

A caching system temporarily stores data to reduce the time needed to access it. It improves performance by keeping frequently accessed data in a location that is faster to access than the original source.

### What is FIFO?

FIFO (First In, First Out) is a cache replacement policy where the oldest items are removed first when the cache reaches its limit.

### What is LIFO?

LIFO (Last In, First Out) is a cache replacement policy where the most recently added items are removed first when the cache reaches its limit.

### What is LRU?

LRU (Least Recently Used) is a cache replacement policy where the least recently accessed items are removed first when the cache reaches its limit.

### What is MRU?

MRU (Most Recently Used) is a cache replacement policy where the most recently accessed items are removed first when the cache reaches its limit.

### What is LFU?

LFU (Least Frequently Used) is a cache replacement policy where the least frequently accessed items are removed first when the cache reaches its limit.

### Purpose of a Caching System

The primary purpose of a caching system is to improve the performance and efficiency of data retrieval by reducing the time it takes to access frequently used data.

### Limits of a Caching System

- Limited storage capacity
- Potential for stale data
- Complexity in managing cache consistency
- Overhead in maintaining the cache

## Examples

Here are some examples of caching systems:

- Web browsers use caching to store web pages and resources.
- Databases use caching to store query results.
- Operating systems use caching to store frequently accessed files.

## More Info

### Parent class BaseCaching

All your classes must inherit from `BaseCaching` defined below:

```python
#!/usr/bin/python3
""" BaseCaching module
"""

class BaseCaching():
    """ BaseCaching defines:
      - constants of your caching system
      - where your data are stored (in a dictionary)
    """
    MAX_ITEMS = 4

    def __init__(self):
        """ Initialize
        """
        self.cache_data = {}

    def print_cache(self):
        """ Print the cache
        """
        print("Current cache:")
        for key in sorted(self.cache_data.keys()):
            print("{}: {}".format(key, self.cache_data.get(key)))

    def put(self, key, item):
        """ Add an item in the cache
        """
        raise NotImplementedError("put must be implemented in your cache class")

    def get(self, key):
        """ Get an item by key
        """
        raise NotImplementedError("get must be implemented in your cache class")
```
