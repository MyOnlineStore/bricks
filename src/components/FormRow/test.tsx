import { mountWithTheme } from '../../utility/styled/testing';
import React from 'react';
import BreakpointProvider from '../BreakpointProvider';
import { PropsType } from '../BreakpointProvider/';
import FormRow from '../FormRow';
import Box from '../Box';

jest.mock('../BreakpointProvider', () =>
    jest.fn().mockImplementation((props: PropsType): JSX.Element => {
        return props.children('small');
    }),
);

describe('FormRow', () => {
    it('renders with a small label width in a small node', () => {
        const component = mountWithTheme(<FormRow label={<></>} field={<></>} />);
        const basisProp = component
            .find(Box)
            .at(1)
            .prop('basis');

        expect(basisProp).toEqual('180px');
    });

    it('renders with a large label width in a large node', () => {
        (BreakpointProvider as jest.Mock<BreakpointProvider>).mockImplementationOnce(
            (props: PropsType): JSX.Element => {
                return props.children('large');
            },
        );

        const component = mountWithTheme(<FormRow label={<></>} field={<></>} />);
        const basisProp = component
            .find(Box)
            .at(1)
            .prop('basis');

        expect(basisProp).toEqual('241px');
    });
});
