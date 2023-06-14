module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
      '^.+\\.tsx?$': ['ts-jest', { /* ts-jest config goes here in Jest */ }],
    },
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
    setupFilesAfterEnv: ['jest-localstorage-mock'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  };
  