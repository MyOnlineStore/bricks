import React from 'react';
import ButtonGroup from '.';
import BreakpointProvider from '../BreakpointProvider';
import { PropsType } from '../BreakpointProvider/';
import Button from '../Button';
import { mountWithTheme } from '../../utility/_styled/testing';

jest.mock('../BreakpointProvider', () =>
    jest.fn().mockImplementation(
        (props: PropsType): JSX.Element => {
            return props.children('large');
        },
    ),
);

describe('ButtonGroup', () => {
    it('renders the correct amount of Buttons', () => {
        const component = mountWithTheme(
            <ButtonGroup>
                <Button title="Test" variant="primary" />
                <Button title="Test" variant="secondary" />
            </ButtonGroup>,
        );

        expect(component.find(Button).length).toBe(2);
    });

    it('renders the correct amount of Buttons on a small breakpoint', () => {
        (BreakpointProvider as jest.Mock<BreakpointProvider>).mockImplementationOnce(
            (props: PropsType): JSX.Element => {
                return props.children('small');
            },
        );

        const component = mountWithTheme(
            <ButtonGroup>
                <Button title="Test" variant="primary" />
            </ButtonGroup>,
        );

        expect(component.find(Button).length).toBe(1);
    });
});
