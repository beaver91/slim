# slimphp

A **slimphp** library that wraps functions used in **php**

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

- **is_array**
  ```js
  import { is_array } from 'slimphp'

  let result = []

  if (is_array(result)) {
    console.log('good')
  }
  ```
- **is_string**
  ```js
  import { is_string } from 'slimphp'

  let result = 'blah blah'

  if (is_string(result)) {
    console.log('good')
  }
  ```
- **is_int**
  ```js
  import { is_int } from 'slimphp'

  let result = 10

  if (is_int(result)) {
    console.log('good')
  }
  ```
- **is_null**
  ```js
  import { is_null } from 'slimphp'

  let result = null

  if (is_null(result)) {
    console.log('good')
  }
  ```
- **is_float**
  ```js
  import { is_float } from 'slimphp'

  let result = 3.14

  if (is_float(result)) {
    console.log('good')
  }
  ```
- **is_undefined**
  ```js
  import { is_undefined } from 'slimphp'

  let result = undefined

  if (is_undefined(result)) {
    console.log('good')
  }
  ```
- **date**
  ```js
  import { date } from 'slimphp'

  let result = date('Y-m-d H:i:s')
  console.log(result) // output: 2021-08-02 21:57:45
  ```
- **str_replace**
  ```js
  import { str_replace } from 'slimphp'

  const result1 = str_replace('Bye', 'Hello', 'Bye, World!')
  console.log(result1) // output: Hello, World!

  const result2 = str_replace(['a', 'b'], ['A', 'B'], ['a', 'b'])
  console.log(result2) // output: ['A', 'B']
  ```
- **time**
  ```js
  import { time } from 'slimphp'

  let result = time()
  console.log(result) // output: 1627989888 (unixtime)
  ```
