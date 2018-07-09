import toJson from 'enzyme-to-json';
import React from 'react';
import Modal from '.';
import { mountWithTheme, shallowWithTheme } from '../../utility/styled';
import BreakpointProvider from '../BreakpointProvider';
import { PropsType } from '../BreakpointProvider/';
import StyledModal, { StyledModalWrapper } from './style';

jest.mock('../ScrollBox', () => jest.fn().mockImplementation((props: PropsType): string => 'div'));

jest.mock('../BreakpointProvider', () =>
    jest.fn().mockImplementation((props: PropsType): JSX.Element => {
        return props.children('large');
    }),
);

describe('Modal', () => {
    it('should render with a small breakpoint', () => {
        (BreakpointProvider as jest.Mock<BreakpointProvider>).mockImplementationOnce(
            (props: PropsType): JSX.Element => {
                return props.children('small');
            },
        );

        const component = mountWithTheme(
            <Modal show={true} renderFixed={(): JSX.Element => <div>bar</div>} title="Foo" />,
        );

        expect(component.find(StyledModal).length).toBe(1);
    });

    it('should render with a medium breakpoint', () => {
        (BreakpointProvider as jest.Mock<BreakpointProvider>).mockImplementationOnce(
            (props: PropsType): JSX.Element => {
                return props.children('medium');
            },
        );

        const component = mountWithTheme(<Modal show={true} title="Foo" />);

        expect(component.find(StyledModal).length).toBe(1);
    });

    it('should be possible to close the modal view', () => {
        const clickMock = jest.fn();
        const component = shallowWithTheme(<Modal show={true} title="Foo" closeAction={clickMock} />);
        const styledModalWrapper = component.find(StyledModalWrapper);

        styledModalWrapper.simulate('click');

        expect(toJson(component.dive())).toMatchSnapshot();
        expect(clickMock).toHaveBeenCalled();

        const componentNoAction = shallowWithTheme(<Modal show={true} title="Foo" closeAction={undefined} />);
        componentNoAction.simulate('click');
    });

    it('should render closed', () => {
        const component = mountWithTheme(<Modal show={false} title="Foo" />);
        expect(component.length).toBe(1);
    });
});
