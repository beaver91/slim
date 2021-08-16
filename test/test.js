'use strict'

const expect = require('chai').expect
const slim = require('../dist/slimphp.js')

describe('Type Functions', () => {

  it('is_array() should return true', () => {
    const result = slim.is_array([])
    expect(result).to.equal(true)
  })

  it('is_string() should return true', () => {
    const result = slim.is_string('slim library')
    expect(result).to.equal(true)
  })

  it('is_int() should return true', () => {
    const result = slim.is_int(77)
    expect(result).to.equal(true)
  })

  it('is_float() should return true', () => {
    const result = slim.is_float(3.14)
    expect(result).to.equal(true)
  })

  it('is_null() should return true', () => {
    const result = slim.is_null(null)
    expect(result).to.equal(true)
  })

  it('is_undefined() should return true', () => {
    const result = slim.is_undefined(undefined)
    expect(result).to.equal(true)
  })

  it('is_callable() should return true', () => {
    let anonymousFunction = function () {
      console.log('Hello, World')
    }

    const result = slim.is_callable(anonymousFunction)
    expect(result).to.equal(true)
  })
})

describe('Array Functions', () => {
  it('array_unique should match unique array', () => {
    const result = slim.array_unique([1, 1, 2, 2, 3, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })
})

describe('Date Functions', () => {
  it('date() should match /\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/', () => {
    const result = slim.date('Y-m-d H:i:s')
    expect(result).to.match(/\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/)
  })
})

describe('String Functions', () => {
  it('sprintf() should match Hello, World!', () => {
    const result = slim.sprintf('Hello, %s%s', 'World', '!')
    expect(result).to.equal('Hello, World!')
  })

  it('str_replace() should match Hello, World', () => {
    const result = slim.str_replace('Bye', 'Hello', 'Bye, World!')
    expect(result).to.equal('Hello, World!')
  })

  it('str_replace() should match [A, B]', () => {
    const result = slim.str_replace(['a', 'b'], ['A', 'B'], ['a', 'b'])
    expect(result).to.deep.equal(['A', 'B'])
  })

  it('substr_replace() should match Hello, beaver', () => {
    const result = slim.substr_replace('Hello, World', 'beaver', 7)
    expect(result).to.equal('Hello, beaver')
  })

  it('substr_replace() should match Hello, beaver, nice!', () => {
    const result = slim.substr_replace('Hello, World, nice!', 'beaver', 7)
    expect(result).to.equal('Hello, beaver, nice!')
  })
})
