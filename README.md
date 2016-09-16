# myao-deep-clone
## Deep Clone Your Object or Array

[![Latest Stable Version](https://img.shields.io/npm/v/myao-deep-clone.svg)](https://www.npmjs.com/package/myao-deep-clone)
[![License](https://img.shields.io/npm/l/myao-deep-clone.svg)](https://www.npmjs.com/package/myao-deep-clone)
[![NPM Downloads](https://img.shields.io/npm/dm/myao-deep-clone.svg)](https://www.npmjs.com/package/myao-deep-clone)

### Install...

```js
npm install myao-deep-clone
```
### and use:

```js
var clone = require('myao-deep-clone');

//clone OBJECTS...

var objectA = {
    propertyA: [1, 2, 3],
    propertyB: {
        deepProperty: 'Deep'
        }
};

var objectB = clone.deep(objectA);

console.log( objectA.propertyA === objectB.propertyA); // false
console.log( objectA.propertyB === objectB.propertyB); // false

// ...and ARRAYS

var arrayA = [0, 1, 2, {a: 3}, [4]];
var arrayB = clone.deep(arrayA);

console.log(arrayA[3] === arrayB[3]); //false
console.log(arrayA[4] === arrayB[4]); //false
```