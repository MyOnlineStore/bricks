import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import FoldOut from '../FoldOut';

describe('FoldOut', () => {
    it('should not break on unmounted refs', () => {
        const fn = ():void => {
            renderer.create(<FoldOut isOpen />, {
                /* tslint:disable */
                createNodeMock: ():null => null,
                /* tslint:enable */
            });
        };

        expect(fn).not.toThrow();
    });
});
