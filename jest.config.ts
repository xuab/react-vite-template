export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/test-utils/jest.setup.ts'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.(d|test).{js,jsx,ts,tsx}',
    '!src/test-utils/*',
    '!src/index.tsx',
  ],
}
