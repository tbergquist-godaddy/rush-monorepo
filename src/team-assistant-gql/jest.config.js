module.exports = {
  rootDir: __dirname,
  preset: '@tbergq/test-utils',
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./scripts/setupTests.ts'],
};
