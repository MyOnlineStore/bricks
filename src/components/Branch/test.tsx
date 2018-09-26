import React from 'react';
import { shallow } from 'enzyme';
import Branch from '.';
import toJson from 'enzyme-to-json';

describe('Branch', () => {
    it('should use true path', () => {
        const component = shallow(
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
        const component = shallow(
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
        const component = shallow(
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
        const component = shallow(<Branch condition={false} ifTrue={(): JSX.Element => <span>true</span>} />);

        expect(toJson(component)).toMatchSnapshot();
        expect(component.at(0).text()).toEqual('');
    });
});
