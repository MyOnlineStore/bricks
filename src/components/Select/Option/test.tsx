import React from 'react';
import { mountWithTheme } from '../../../utility/_styled/testing';
import Option from '.';

describe('Option', () => {
    it('should render', () => {
        const fn = () => {
            mountWithTheme(
                <Option
                    label="test"
                    isSelected={true}
                    isTargeted={false}
                    onClick={(): void => {
                        return undefined;
                    }}
                    onMouseEnter={(): void => {
                        return undefined;
                    }}
                />,
            );
        };

        expect(fn).not.toThrow();
    });
});
