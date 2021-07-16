const intl = require('intl');
const fetchMock = require('jest-fetch-mock');
const orginalError = console.error;
const orginalWarn = console.warn;
const orginalLog = console.log;

fetchMock.enableMocks();

global.addEventListener = jest.fn();
global.removeEventListener = jest.fn();
global.console.error = jest.fn(orginalError);
global.console.warn = jest.fn(orginalWarn);
global.console.log = jest.fn(orginalLog);

global.getSelection = jest.fn().mockReturnValue({
    removeAllRanges: jest.fn(),
});

global.Intl = intl;
