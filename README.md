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

### Type Check
- **is_array**
  ```ts
  import { is_array } from 'slimphp'

  let result = []

  if (is_array(result)) {
    console.log('good')
  }
  ```
- **is_string**
  ```ts
  import { is_string } from 'slimphp'

  let result = 'blah blah'

  if (is_string(result)) {
    console.log('good')
  }
  ```
- **is_int**
  ```ts
  import { is_int } from 'slimphp'

  let result = 10

  if (is_int(result)) {
    console.log('good')
  }
  ```
- **is_null**
  ```ts
  import { is_null } from 'slimphp'

  let result = null

  if (is_null(result)) {
    console.log('good')
  }
  ```
- **is_float**
  ```ts
  import { is_float } from 'slimphp'

  let result = 3.14

  if (is_float(result)) {
    console.log('good')
  }
  ```
- **is_undefined**
  ```ts
  import { is_undefined } from 'slimphp'

  let result = undefined

  if (is_undefined(result)) {
    console.log('good')
  }
  ```
- **is_callable**
  ```ts
  import { is_callable } from 'slimphp'

  if (is_callable(() => {})) {
    console.log('good')
  }
  ```

### Array
- **array_unique**
  ```ts
  import { array_unique } from 'slimphp'

  let result = array_unique([1, 1, 2, 2, 3, 3])
  console.log(result) // output: [1, 2, 3]
  ```

### Date
- **date**
  ```ts
  import { date } from 'slimphp'

  let result = date('Y-m-d H:i:s')
  console.log(result) // output: 2021-08-02 21:57:45
  ```
- **time**
  ```ts
  import { time } from 'slimphp'

  let result = time()
  console.log(result) // output: 1627989888 (unixtime)
  ```
### String
- **sprintf**
  ```ts
  import { sprintf } from 'slimphp'

  const result = sprintf('Hello, %s%s', 'World', '!')
  console.log(result) // output: Hello, World!
  ```
- **str_replace**
  ```ts
  import { str_replace } from 'slimphp'

  const result1 = str_replace('Bye', 'Hello', 'Bye, World!')
  console.log(result1) // output: Hello, World!

  const result2 = str_replace(['a', 'b'], ['A', 'B'], ['a', 'b'])
  console.log(result2) // output: ['A', 'B']
  ```
- **substr_replace**
  ```ts
  import { substr_replace } from 'slimphp'

  const result1 = substr_replace('Hello, World', 'beaver', 7)
  console.log(result1) // output: Hello, beaver

  const result2 = substr_replace('Hello, World, nice!', 'beaver', 7)
  console.log(result2) // output: Hello, beaver, nice!
  ```
