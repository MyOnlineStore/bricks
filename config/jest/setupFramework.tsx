/// <reference path="../../src/declarations/global.d.ts" />
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

beforeEach(() => {
    jest.clearAllMocks();
});
