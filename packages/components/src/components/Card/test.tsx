import React from 'react';
import Card from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import Text from '../Text';
import FoldOut from '../FoldOut';

describe('Card', () => {
    it('should render with just a label', () => {
        const component = mountWithTheme(<Card label={<Text strong>Label</Text>} data-testid="Card" />);

        const label = component.find('[data-testid="Card-label"]').hostNodes();
        const description = component.find('[data-testid="Card-description"]').hostNodes();
        const foldoutIcon = component.find('[data-testid="Card-foldout-icon"]').hostNodes();
        const foldoutComponent = component.find(FoldOut);
        const content = component.find('[data-testid="Card-content"]').hostNodes();

        expect(label).toHaveLength(1);
        expect(description).toHaveLength(0);
        expect(foldoutIcon).toHaveLength(0);
        expect(foldoutComponent).toHaveLength(0);
        expect(content).toHaveLength(0);
    });

    it('should render a description', () => {
        const component = mountWithTheme(
            <Card label={<Text strong>Label</Text>} description="Description" data-testid="Card" />,
        );

        const description = component.find('[data-testid="Card-description"]').hostNodes();

        expect(description).toHaveLength(1);
    });

    it('should render content', () => {
        const component = mountWithTheme(
            <Card label={<Text strong>Label</Text>} content={<>Content</>} data-testid="Card" />,
        );

        const content = component.find('[data-testid="Card-content"]').hostNodes();

        expect(content).toHaveLength(1);
    });

    it('should be able to fold when open and onClick props are given', () => {
        const onClickMock = jest.fn();

        const component = mountWithTheme(
            <Card
                label={<Text strong>Label</Text>}
                onClick={onClickMock}
                open={false}
                content={<>Content</>}
                data-testid="Card"
            />,
        );

        const foldoutIcon = component.find('[data-testid="Card-foldout-icon"]').hostNodes();
        const foldoutComponent = component.find(FoldOut);

        component
            .find('[data-testid="Card-click-area"]')
            .hostNodes()
            .simulate('click');

        expect(foldoutIcon).toHaveLength(1);
        expect(foldoutComponent).toHaveLength(1);
        expect(onClickMock).toBeCalledTimes(1);
    });

    it('should be able to toggle when checked and onChange props are given', () => {
        const onChangeMock = jest.fn();

        const component = mountWithTheme(
            <Card label={<Text strong>Label</Text>} onChange={onChangeMock} checked={false} data-testid="Card" />,
        );

        const toggle = component.find('[data-testid="Card-toggle"]').hostNodes();

        toggle.simulate('click');

        expect(toggle).toHaveLength(1);
        expect(onChangeMock).toBeCalledTimes(1);
        expect(onChangeMock).toBeCalledWith(true);
    });

    it('should be able to render custom nodes, like an image as label', () => {
        const component = mountWithTheme(
            <Card label={<img src="data:image/png;base64,0" data-testid="image" />} data-testid="Card" />,
        );

        const image = component.find('[data-testid="image"]');

        expect(image).toHaveLength(1);
    });
});
