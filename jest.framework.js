const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { addSelectors } = require('enzyme-selectors');

require('jest-styled-components');

configure({ adapter: new Adapter() });

addSelectors();

beforeEach(() => {
    jest.clearAllMocks();
});
