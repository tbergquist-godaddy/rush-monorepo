const rules = require('../index');

it('has our rules', () => {
  expect(rules).toMatchSnapshot();
});
