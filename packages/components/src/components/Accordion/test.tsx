import React from 'react';
import Accordion from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import Text from '../Text';
import FoldOut from '../FoldOut';

describe('Accordion', () => {
    it('should render a label and content a foldout icon', () => {
        const component = mountWithTheme(
            <Accordion open={true} label={<Text strong>Label</Text>} onClick={() => {}} data-testid="Accordion">
                Content
            </Accordion>,
        );

        const label = component.find('[data-testid="Accordion-label"]').hostNodes();
        const foldoutIcon = component.find('[data-testid="Accordion-foldout-icon"]').hostNodes();
        const content = component.find('[data-testid="Accordion-content"]').hostNodes();

        expect(label).toHaveLength(1);
        expect(foldoutIcon).toHaveLength(1);
        expect(content).toHaveLength(1);
    });

    it('should be able to fold', () => {
        const onClickMock = jest.fn();

        const component = mountWithTheme(
            <Accordion label={<Text strong>Label</Text>} onClick={onClickMock} open={false} data-testid="Accordion" />,
        );

        const foldoutIcon = component.find('[data-testid="Accordion-foldout-icon"]').hostNodes();
        const foldoutComponent = component.find(FoldOut);

        component
            .find('[data-testid="Accordion-click-area"]')
            .hostNodes()
            .simulate('click');

        expect(foldoutIcon).toHaveLength(1);
        expect(foldoutComponent).toHaveLength(1);
        expect(onClickMock).toBeCalledTimes(1);
    });

    it('should be able to render custom nodes, like an image as label', () => {
        const component = mountWithTheme(
            <Accordion
                label={<img src="data:image/png;base64,0" data-testid="image" />}
                open={false}
                onClick={() => {}}
                data-testid="Accordion"
            />,
        );

        const image = component.find('[data-testid="image"]');

        expect(image).toHaveLength(1);
    });
});
