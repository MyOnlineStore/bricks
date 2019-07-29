import { mount } from 'enzyme';
import React, { FC } from 'react';
import ButtonBase, { PropsType as BasePropsType } from '.';
import MosTheme from '../../../themes/MosTheme';
import { mountWithTheme } from '../../../utility/styled/testing';
import 'jest-styled-components';
import TextualButton from '../../TextualButton';
import IconButton from '../../IconButton';
import Button from '../';

type TestCaseType = ['ButtonBase' | 'Button' | 'IconButton' | 'TextualButton', FC<Partial<BasePropsType>>];

const buttonBase: TestCaseType = ['ButtonBase', props => <ButtonBase title="foo" {...props} />];
const button: TestCaseType = ['Button', props => <Button variant="primary" title="foo" {...props} />];
const iconButton: TestCaseType = ['IconButton', props => <IconButton icon="" title="foo" {...props} />];
const textualButton: TestCaseType = [
    'TextualButton',
    props => <TextualButton variant="primary" title="foo" {...props} />,
];

describe('ButtonBase implementations', () => {
    describe.each<TestCaseType>([buttonBase, button, iconButton, textualButton])('%s', (_, Implementation) => {
        it('should render a disabled state', () => {
            const clickMock = jest.fn();

            const component = mountWithTheme(<Implementation disabled onClick={clickMock} />);

            component.simulate('click');
            expect(clickMock).not.toHaveBeenCalled();
        });

        it('should not call the passed action on click when loading', () => {
            const clickMock = jest.fn();
            const component = mountWithTheme(<Implementation loading onClick={clickMock} />);

            component.simulate('click');

            expect(clickMock).not.toHaveBeenCalled();
        });

        it('should call the passed action on click', () => {
            const clickMock = jest.fn();

            const component = mount(
                <MosTheme>
                    <Implementation onClick={clickMock} />
                </MosTheme>,
            );

            component.simulate('click');

            expect(clickMock).toHaveBeenCalled();
        });

        it('should render an <a> tag when a href is provided', () => {
            const component = mount(
                <MosTheme>
                    <Implementation onClick={undefined} href="http://foo.bar" />
                </MosTheme>,
            );

            expect(component.find('a').length).toBe(1);
        });

        it('should not break when clicked without an onClick callback', () => {
            const fn = (): void => {
                const component = mount(
                    <MosTheme>
                        <Implementation onClick={undefined} />
                    </MosTheme>,
                );

                component.simulate('click');
            };

            expect(fn).not.toThrow();
        });

        it('should be testable with a test-id', () => {
            const component = mount(
                <MosTheme>
                    <Implementation data-testid="foo" />
                </MosTheme>,
            );

            expect(component.find('[data-testid="foo"]').hostNodes().length).toBe(1);
        });

        it('should pass the event to the onClick callback', () => {
            // tslint:disable-next-line:no-any
            let clickEvent: any = {};

            const clickMock = jest.fn(event => {
                clickEvent = event;
            });

            const component = mount(
                <MosTheme>
                    <Implementation onClick={clickMock} />
                </MosTheme>,
            );

            component.find(Implementation).simulate('click');

            expect(clickMock).toHaveBeenCalled();
            expect(clickEvent.target).toBeDefined();
        });
    });

    /**
     * These tests are only meant for implementations that actually render children.
     * Iconbutton does not render children but instead renders a passed in icon.
     */
    describe.each<TestCaseType>([buttonBase, button, textualButton])('%s', (_, Implementation) => {
        it('should render with children', () => {
            const button = mountWithTheme(<Implementation>foo</Implementation>);
            const anchor = mountWithTheme(<Implementation href="#">foo</Implementation>);

            expect(button.find('button').text()).toEqual('foo');
            expect(anchor.find('a').text()).toEqual('foo');
        });
    });

    /**
     * Rendering a title as children is not supported by all implementations
     * because the ButtonBase delegates this.
     */
    describe.each<TestCaseType>([button, textualButton])('%s', (_, Implementation) => {
        it('should render the title as children when no children are provided', () => {
            const button = mountWithTheme(<Implementation title="foo" />);
            const anchor = mountWithTheme(<Implementation href="" title="foo" />);

            expect(anchor.find('a').text()).toEqual('foo');
            expect(button.find('button').text()).toEqual('foo');
        });
    });
});
