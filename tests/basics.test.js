import fromClass from '../src'

test('is a function', () => {
  expect(fromClass).toEqual(expect.any(Function))
})

test('called without arguments', () => {
  expect(fromClass()).toBe(null)
})
