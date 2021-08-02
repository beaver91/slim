# beaver-slim

Slim JavaScript library (aka **slim**)

## Installing
Using npm:
```
$ npm install beaver-slim
```

Using yarn:
```
$ yarn add beaver-slim
```

## Functions

- **isString**
  ```js
  import { isString } from 'beaver-slim'

  let result = 'blah blah'

  if (isString(result)) {
    console.log('good')
  }
  ```
- **isInt**
  ```js
  import { isInt } from 'beaver-slim'

  let result = 10

  if (isInt(result)) {
    console.log('good')
  }
  ```
- **isFloat**
  ```js
  import { isFloat } from 'beaver-slim'

  let result = 3.14

  if (isFloat(result)) {
    console.log('good')
  }
  ```
- **isUndefined**
  ```js
  import { isUndefined } from 'beaver-slim'

  let result = undefined
  
  if (isUndefined(result)) {
    console.log('good')
  }
  ```
