const { handleSubmit } = require('../src/client/js/formHandler')

describe('Testing formHandler.js', () => {

  test('Testing handleSubmit() function definition', () => {
    expect(handleSubmit).toBeDefined();
  })

})