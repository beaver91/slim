# slimphp

A slim library that wraps functions used in **php**

All functions call from snake_case to **pascalCase**.

## Installing
Using npm:
```
$ npm install slimphp
```

Using yarn:
```
$ yarn add slimphp
```

## Functions

- **isString**
  ```js
  import { isString } from 'slimphp'

  let result = 'blah blah'

  if (isString(result)) {
    console.log('good')
  }
  ```
- **isInt**
  ```js
  import { isInt } from 'slimphp'

  let result = 10

  if (isInt(result)) {
    console.log('good')
  }
  ```
- **isNull**
  ```js
  import { isNull } from 'slimphp'

  let result = null

  if (isNull(result)) {
    console.log('good')
  }
  ```
- **isFloat**
  ```js
  import { isFloat } from 'slimphp'

  let result = 3.14

  if (isFloat(result)) {
    console.log('good')
  }
  ```
- **isUndefined**
  ```js
  import { isUndefined } from 'slimphp'

  let result = undefined

  if (isUndefined(result)) {
    console.log('good')
  }
  ```
- **datetime**
  ```js
  import { datetime } from 'slimphp'

  let result = datetime() // is same `datetime('Y-m-d H:i:s')`
  console.log(result) // output: 2021-08-02 21:57:45
  ```
