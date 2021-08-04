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
})

describe('String Functions', () => {
  it('date() should match /\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/', () => {
    const result = slim.date('Y-m-d H:i:s')
    expect(result).to.match(/\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/)
  })

  // it('sprintf() should match', () => {

  // })

  it('str_replace() should match Hello, World', () => {
    const result = slim.str_replace('Bye', 'Hello', 'Bye, World!')
    expect(result).to.equal('Hello, World!')
  })

  it('str_replace() should match [A, B]', () => {
    const result = slim.str_replace(['a', 'b'], ['A', 'B'], ['a', 'b'])
    expect(result).to.deep.equal(['A', 'B'])
  })
})
