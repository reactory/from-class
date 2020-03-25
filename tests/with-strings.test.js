import fromClass from '../src'

test('called with zero length strings', () => {
  expect(fromClass('')).toBe(null)
  expect(fromClass('', '')).toBe(null)
  expect(fromClass('', '', '')).toBe(null)

  expect(fromClass(' ')).toBe(null)
  expect(fromClass(' ', ' ')).toBe(null)
  expect(fromClass(' ', ' ', ' ')).toBe(null)
})

test('called with regular strings', () => {
  expect(fromClass('a')).toBe('a')
  expect(fromClass('a', 'b')).toBe('a b')
  expect(fromClass('a', 'b', 'c')).toBe('a b c')
})

test('called conditionally with regular strings', () => {
  expect(fromClass(true && 'a')).toBe('a')
  expect(fromClass(false && 'a')).toBe(null)
})
