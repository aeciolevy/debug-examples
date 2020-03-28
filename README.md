# Test debug module

This is an example how to use the debug module.

## Usage

`debug` exposes a function; simply pass this function the name of your module, and it will return a decorated version of console.error for you to pass debug statements to. This will allow you to toggle the debug output for different parts of your module as well as the module as a whole.

## How to use

```
DEBUG=potato:* node index.js
```

### For more information

Please see convetion and more use in [npm debug](https://www.npmjs.com/package/debug)
