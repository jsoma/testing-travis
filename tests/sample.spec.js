/* global describe test expect document */

describe('JavaScript basics', () => {
  test('Measuring the length of a list', () => {
    var numbers = [1, 2, 3, 4]
    expect(numbers.length).toBe(4)
  })

  test('Checking out some math', () => {
    var sum = 4 + 5
    expect(sum).toBe(9)
  })
})
