import React, { createRef } from 'react';
import Modal from '.';
import { mountWithTheme } from '../../utility/_styled/testing';
import StyledModal, { StyledModalWrapper } from './style';
import TransitionAnimation from '../TransitionAnimation';
import IconButton from '../IconButton';
import Measure from 'react-measure';

jest.mock('../ScrollBox', () => jest.fn().mockImplementation((): string => 'div'));

jest.mock('react-measure', () => {
    return jest.fn().mockImplementation(
        // tslint:disable-next-line:no-any
        (props: any) => props.children({ measureRef: () => undefined, contentRect: { bounds: { width: 300 } } }),
    );
});

describe('Modal', () => {
    it('should render with renderFixed', () => {
        const component = mountWithTheme(
            <Modal
                show={true}
                renderFixed={(): JSX.Element => <div data-testid="bar">renderFixed element</div>}
                title="Foo"
            />,
        );

        expect(component.find('div[data-testid="bar"]').length).toBe(1);
    });

    it('cleans up event listeners when unmounting', () => {
        const component = mountWithTheme(<Modal show={true} title="Foo" />);

        component.unmount();

        /* tslint:disable */
        expect(global.removeEventListener).toBeCalled();
        /* tslint:enable */
    });

    it('should render with a buttons prop', () => {
        const component = mountWithTheme(
            <Modal
                show={true}
                buttons={[
                    <button key="b1" data-testid="button">
                        button 1
                    </button>,
                    <button key="b2" data-testid="button">
                        button 2
                    </button>,
                ]}
                title="Foo"
            />,
        );

        expect(component.find('button[data-testid="button"]').length).toBe(2);
    });

    it('should render with a small breakpoint', () => {
        (Measure as jest.Mock<Measure>).mockImplementationOnce(
            // tslint:disable-next-line:no-any
            (props: any): JSX.Element => {
                return props.children({ measureRef: createRef(), contentRect: { bounds: { width: 300 } } });
            },
        );

        const component = mountWithTheme(
            <Modal size="small" show={true} renderFixed={(): JSX.Element => <div>bar</div>} title="Foo" />,
        );

        expect(component.find(StyledModal).length).toBe(1);
    });

    it('should render with a large breakpoint', () => {
        (Measure as jest.Mock<Measure>).mockImplementationOnce(
            // tslint:disable-next-line:no-any
            (props: any): JSX.Element => {
                return props.children({ measureRef: createRef(), contentRect: { bounds: { width: 1000 } } });
            },
        );

        const component = mountWithTheme(<Modal show={true} title="Foo" />);

        expect(component.find(StyledModal).length).toBe(1);
    });

    it('should be possible to close the modal view using the close button', () => {
        const clickMock = jest.fn();
        const component = mountWithTheme(<Modal show={true} title="Foo" onClose={clickMock} />);
        const closeButton = component.find(IconButton).first();

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

        const component = mountWithTheme(<Modal show={true} title="Foo" onClose={clickMock} />).find(
            StyledModalWrapper,
        );

        mapMouseEvent.mousedown({
            target: component.getDOMNode(),
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

        const component = mountWithTheme(<Modal show={true} title="Foo" onClose={clickMock} />).find(StyledModal);

        mapMouseEvent.mousedown({
            target: component.getDOMNode(),
        });

        expect(clickMock).not.toHaveBeenCalled();
    });

    it('should not break when no onClose is provided', () => {
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
