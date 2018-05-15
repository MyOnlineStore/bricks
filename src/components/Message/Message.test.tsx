import toJson from 'enzyme-to-json';
import React from 'react';
import Message from '.';
import shallowWithTheme from '../../utility/styled/shallowWithTheme';

describe('Message',  () => {
    it('should render with different styling when marked as read', () => {
        const component = shallowWithTheme(
            <Message
                severity="success"
                title="Wow, Great job!"
                message="This went very well."
                read={true}
            />
        );

        /* tslint:disable */
        (expect(toJson(component)) as any).toHaveStyleRule('background', '#f8f9fb');
        /* tslint:enable */
    });
});
