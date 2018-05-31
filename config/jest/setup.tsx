const orginalError = console.error;
const orginalWarn = console.warn;
const orginalLog = console.log;

global.addEventListener = jest.fn();
global.removeEventListener = jest.fn();
global.console.error = jest.fn(orginalError);
global.console.warn = jest.fn(orginalWarn);
global.console.log = jest.fn(orginalLog);
