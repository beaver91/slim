export function isString(n: any): boolean {
  return typeof n === 'string'
}

export function isInt(n: number): boolean {
  return n % 1 === 0
}

export function isFloat(n: number): boolean {
  return Number(n) === n && n % 1 !== 0
}

export function isNull(n: any): boolean {
  return n === null
}

/**
 * js
 */
export function isUndefined(n: any): boolean {
  return typeof n === 'undefined'
}

/**
 * @example datetime('Y-m-d H:i:s')
 */
export function datetime(format: string = 'Y-m-d H:i:s'): string {
  const date: Date = new Date()
  const splitted: string[] = format.split('')

  let result: string[] = []

  splitted.forEach(char => {
    let value: string = ''

    switch (char) {
      case 'Y':
        value = date.getFullYear().toString()
        break
      case 'y':
        value = date.getFullYear().toString().slice(-2)
        break
      case 'm':
        value = `0${date.getMonth() + 1}`.slice(-2)
        break
      case 'd':
        value = `0${date.getDate()}`.slice(-2)
        break
      case 'H':
        value = `0${date.getHours()}`.slice(-2)
        break
      case 'i':
        value = `0${date.getMinutes()}`.slice(-2)
        break
      case 's':
        value = `0${date.getSeconds()}`.slice(-2)
        break
      default:
        value = char
    }

    result.push(value)
  })

  return result.join('')
}
