module.exports = {
    globals: {
        'ts-jest': {
            babelConfig: {
                plugins: [
                    [
                        'babel-plugin-styled-components',
                        {
                            ssr: true,
                        },
                    ],
                ],
            },
        },
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    rootDir: '.',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    clearMocks: true,
    coverageDirectory: 'reports/jest',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    coverageThreshold: {
        src: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/__snapshots__/*',
        '!<rootDir>/node_modules/',
        '!src/**/story.{ts,tsx}',
        '!src/**/*.test.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/*.DontTest.tsx',
        '!src/index.ts',
        '!src/utility/styled/*',
        '!src/utility/SubscriptionContext/index.tsx',
    ],
    setupFilesAfterEnv: ['./jest.framework.js'],
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css)$': '<rootDir>/__mocks__/cssMock.js',
        'simplebar/dist/simplebar.min.css': '<rootDir>/__mocks__/simplebarCss.ts',
    },
};
