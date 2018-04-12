import React from 'react';
import renderer from 'react-test-renderer';
import { PropsType } from '../Button/Button.template';
import FlatButton from '../FlatButton/FlatButton.template';

jest.mock('../Button/Button.template', () => (props:PropsType):string => {
    if (props.action !== undefined) {
        props.action();
    }

    return 'mockComponent';
});

describe('FlatButton', () => {
    it('should pass on the action', () => {
        const mockAction = jest.fn();

        renderer.create(
            <FlatButton
                title="foo"
                action={mockAction}
            >
                foo
            </FlatButton>
        );

        expect(mockAction).toHaveBeenCalled();
    });

    it('shouldn\'t throw when no action is passed', () => {
        const fn = ():void => {
            renderer.create(
                <FlatButton title="foo">
                    foo
                </FlatButton>
            );
        };

        expect(fn).not.toThrow();
    });
});
