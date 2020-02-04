import React from 'react';
import { mount } from 'enzyme';
import Branch from '.';

describe('Branch', () => {
    it('should use true path', () => {
        const component = mount(
            <Branch
                condition={true}
                ifTrue={(children): JSX.Element => (
                    <>
                        <span>true</span>
                        {children}
                    </>
                )}
            >
                <span>children</span>
            </Branch>,
        );

        expect(
            component
                .find('span')
                .first()
                .text(),
        ).toEqual('true');
        expect(
            component
                .find('span')
                .last()
                .text(),
        ).toEqual('children');
    });

    it('should use the false path', () => {
        const component = mount(
            <Branch
                condition={false}
                ifTrue={(children): JSX.Element => (
                    <>
                        <span>true</span>
                        {children}
                    </>
                )}
                ifFalse={(children): JSX.Element => (
                    <>
                        <span>false</span>
                        {children}
                    </>
                )}
            >
                <span>children</span>
            </Branch>,
        );

        expect(
            component
                .find('span')
                .first()
                .text(),
        ).toEqual('false');
        expect(
            component
                .find('span')
                .last()
                .text(),
        ).toEqual('children');
    });

    it('should no-op when no false path is provided and the condition is false', () => {
        const component = mount(
            <Branch
                condition={false}
                ifTrue={(children): JSX.Element => (
                    <>
                        <span>true</span>
                        {children}
                    </>
                )}
            >
                <span>children</span>
            </Branch>,
        );

        expect(component.find('span').text()).toEqual('children');
    });

    it('should not render anything when no components or false path are provided and the condition is false', () => {
        const component = mount(<Branch condition={false} ifTrue={(): JSX.Element => <span>true</span>} />);

        // tslint:disable-next-line

        expect(component.children()).toEqual({});
    });
});
