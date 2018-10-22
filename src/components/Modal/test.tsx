import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import BreakpointProvider from '../BreakpointProvider';
import { PropsType } from '../BreakpointProvider/';
import StyledModal, { StyledModalWrapper } from './style';
import TransitionAnimation from '../TransitionAnimation';
import Button from '../Button';

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
            <Modal size="small" show={true} renderFixed={(): JSX.Element => <div>bar</div>} title="Foo" />,
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

    it('should be possible to close the modal view using the close button', () => {
        const clickMock = jest.fn();
        const component = mountWithTheme(<Modal show={true} title="Foo" closeAction={clickMock} />);
        const closeButton = component.find(Button.Flat).first();

        closeButton.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });

    it('should close when clicked outside the modal view', () => {
        const clickMock = jest.fn();

        /*tslint:disable*/
        const mapMouseEvent = {} as any;
        /*tslint:enable*/

        document.addEventListener = jest.fn((event, callback) => {
            mapMouseEvent[event] = callback;
        });

        const component = mountWithTheme(<Modal show={true} title="Foo" closeAction={clickMock} />).find(
            StyledModalWrapper,
        );

        mapMouseEvent.mousedown({
            target: ReactDOM.findDOMNode(component.instance()),
        });

        expect(clickMock).toHaveBeenCalled();
    });

    it('should not close when clicked inside the modal view', () => {
        const clickMock = jest.fn();

        /*tslint:disable*/
        const mapMouseEvent = {} as any;
        /*tslint:enable*/

        document.addEventListener = jest.fn((event, callback) => {
            mapMouseEvent[event] = callback;
        });

        const component = mountWithTheme(<Modal show={true} title="Foo" closeAction={clickMock} />).find(StyledModal);

        mapMouseEvent.mousedown({
            target: ReactDOM.findDOMNode(component.instance()),
        });

        expect(clickMock).not.toHaveBeenCalled();
    });

    it('should not break when no closeAction is provided', () => {
        const component = mountWithTheme(<Modal show={true} title="Foo" />);
        const wrapper = component.find(StyledModalWrapper).first();

        const fn = (): void => {
            wrapper.simulate('click');
        };

        expect(fn).not.toThrow();
    });

    it('should render closed', () => {
        const component = mountWithTheme(<Modal show={false} title="Foo" />);
        const transitionAnimation = component.find(TransitionAnimation);

        expect(transitionAnimation.prop('show')).toBe(false);
    });
});
