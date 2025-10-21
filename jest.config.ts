// import type { Config } from 'jest';

// const config: Config = {
//   preset: 'jest-preset-angular',
// //   setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
//   testEnvironment: 'jsdom',

//   transform: {
//     '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',
//   },

//   transformIgnorePatterns: [
//     'node_modules/(?!.*\\.mjs$)',
//   ],

//   moduleFileExtensions: ['ts', 'html', 'js', 'json'],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1', // adjust if you use @ path aliases
//   },
// };

// export default config;

import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|html|svg)$': ['jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      }
    ]
  },

  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$)',
  ],

  moduleFileExtensions: ['ts', 'js', 'html', 'json', 'mjs'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@environments/(.*)$': '<rootDir>/src/environments/$1',
    '\\.(css|scss|sass)$': 'identity-obj-proxy',          // stub styles
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js', // stub assets
    '^common-ui$': '<rootDir>/projects/common-ui/src/public-api.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'], // no setup file needed in jest-preset-angular v15
  testPathIgnorePatterns: ['<rootDir>/dist/'],
modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
export default config;