const { showErrorMessage, hideErrorMessage } = require('../src/client/js/errorMessagesHandler')

describe('Testing errorMessagesHandler.js', () => {

  test('Testing showErrorMessage() function definition', () => {
    expect(showErrorMessage).toBeDefined();
  })

  test('Testing hideErrorMessage() function definition', () => {
    expect(hideErrorMessage).toBeDefined();
  })

})