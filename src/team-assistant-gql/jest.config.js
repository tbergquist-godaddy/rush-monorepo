module.exports = {
  rootDir: __dirname,
  preset: './node_modules/@tbergq/test-utils/preset-base.js',
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./scripts/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/*.test.ts'],
};
