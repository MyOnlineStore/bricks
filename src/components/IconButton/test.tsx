import React from 'react';
import 'jest-styled-components';
import IconButton from '.';
import { mountWithTheme } from '../../utility/_styled/testing';
import Spinner from '../Spinner';

describe('IconButton', () => {
    it('should be able to render a loading IconButton', () => {
        const component = mountWithTheme(
            <IconButton loading icon="cross" title="Foo" value="Bar" onChange={() => undefined} />,
        );

        expect(component.contains(Spinner));
    });
});
