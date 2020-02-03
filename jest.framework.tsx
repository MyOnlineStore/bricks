/// <reference path="src/_declarations/global.d.ts" />
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import { addSelectors } from 'enzyme-selectors';

configure({ adapter: new Adapter() });

beforeEach(() => {
    jest.clearAllMocks();
});

addSelectors();
