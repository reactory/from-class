import fromClass from '../src'

test('called conditionally with plain objects', () => {
  expect(fromClass({ a: true })).toBe('a')
  expect(fromClass({ a: false })).toBe(null)
})
