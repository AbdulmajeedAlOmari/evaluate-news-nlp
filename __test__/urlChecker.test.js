const { checkURL } = require('../src/client/js/urlChecker')

describe('Testing urlChecker.js', () => {

  test('Testing checkURL(text) function definition', () => {
    expect(checkURL).toBeDefined();
  })

  test('Testing checkURL(text) with incorrect URL input', () => {
    expect(checkURL('Not a URL')).toBe(false);
  })

  test('Testing checkURL(text) with correct URL input', () => {
    expect(checkURL('https://www.netflix.com')).toBe(true);
  })
})