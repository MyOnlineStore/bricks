import { mount } from 'enzyme';
import React from 'react';
import ButtonBase from '.';
import MosTheme from '../../../themes/MosTheme';
import { mountWithTheme } from '../../../utility/styled/testing';
import 'jest-styled-components';
import TextualButton from '../../TextualButton';
import IconButton from '../../IconButton';
import Button from '../';

describe('ButtonBase', () => {
    it('should render a link with children', () => {
        const component = mountWithTheme(
            <ButtonBase href="#" title="Foo Bar?">
                Foo Bar
            </ButtonBase>,
        );
        expect(component.find('a').text()).toEqual('Foo Bar');
    });

    it('should render a disabled state', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(<ButtonBase disabled title="disabled" onClick={clickMock} />);

        component.simulate('click');
        expect(clickMock).not.toHaveBeenCalled();
    });

    it('should not call the passed action on click when loading', () => {
        const clickMock = jest.fn();
        const component = mountWithTheme(<ButtonBase loading title="Foo" onClick={clickMock} />);

        component.simulate('click');

        expect(clickMock).not.toHaveBeenCalled();
    });

    it('should call the passed action on click', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(<ButtonBase title="ButtonBase2 title" onClick={clickMock} />);

        component.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });

    it('should render an <a> tag when a href is provided', () => {
        const component = mount(
            <MosTheme>
                <ButtonBase title="ButtonBase2 title" onClick={undefined} href="http://foo.bar" />
            </MosTheme>,
        );

        expect(component.find('a').length).toBe(1);
    });

    it('should not break when clicked without an onClick callback', () => {
        const fn = (): void => {
            const component = mount(
                <MosTheme>
                    <ButtonBase title="ButtonBase2 title" onClick={undefined} />
                </MosTheme>,
            );

            component.simulate('click');
        };

        expect(fn).not.toThrow();
    });

    it('should be testable with a test-id', () => {
        const component = mount(
            <MosTheme>
                <ButtonBase title="ButtonBase title" data-testid="foo" />
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
                <ButtonBase title="ButtonBase title" onClick={clickMock} />
            </MosTheme>,
        );

        component.find(ButtonBase).simulate('click');

        expect(clickMock).toHaveBeenCalled();
        expect(clickEvent.target).toBeDefined();
    });

    describe('Implementations', () => {
        describe.each([
            ['Button', <Button variant="primary" title="foo" data-testid="foo" />],
            ['IconButton', <IconButton icon="" title="foo" data-testid="foo" />],
            ['TextualButton', <TextualButton variant="primary" title="foo" data-testid="foo" />],
        ])('%s', (_, implementation) => {
            it('should only render a single data-testid on hostNodes', () => {
                const component = mount(<MosTheme>{implementation}</MosTheme>);

                expect(component.find('[data-testid="foo"]').hostNodes().length).toBe(1);
            });
        });
    });
});
