import { shallow } from 'enzyme';
import React from 'react';
import ButtonGroup from '.';
import BreakpointProvider from '../BreakpointProvider';
import { PropsType } from '../BreakpointProvider/';
import Button from '../Button';

jest.mock('../BreakpointProvider', () =>
    jest.fn().mockImplementation((props: PropsType): JSX.Element => {
        return props.children('large');
    }),
);

describe('ButtonGroup', () => {
    it('renders with a Button and a FlatButton in a large node', () => {
        const component = shallow(
            <ButtonGroup>
                <Button title="Test" variant="primary" />
                <Button title="Test" variant="secondary" />
            </ButtonGroup>,
        ).dive();

        expect(component).toMatchSnapshot();
    });

    it('renders with a single Button in a small node', () => {
        (BreakpointProvider as jest.Mock<BreakpointProvider>).mockImplementationOnce(props => {
            return props.children('small');
        });

        const component = shallow(
            <ButtonGroup>
                <Button title="Test" variant="primary" />
            </ButtonGroup>,
        ).dive();

        expect(component).toMatchSnapshot();
    });
});
