import React from 'react';
import { mountWithTheme } from '../../utility/styled';
import Button from '../Button';
import ButtonChain from './index';

describe('ButtonChain', () => {
    it('should step through the buttons on click', () => {
        const component = mountWithTheme(
            <ButtonChain>
                <Button title="step 1" variant="primary" />
                <Button title="step 2" variant="destructive" />
            </ButtonChain>,
        );

        component.find(Button).simulate('click');
        component.update();

        expect(component.find(Button).text()).toEqual('step 2');
    });

    it('should step back to the first button after the final button is clicked', () => {
        const component = mountWithTheme(
            <ButtonChain>
                <Button title="step 1" variant="primary" />
                <Button title="step 2" variant="destructive" />
            </ButtonChain>,
        );

        component.find(Button).simulate('click');
        component.update();
        component.find(Button).simulate('click');
        component.update();

        expect(component.find(Button).text()).toEqual('step 1');
    });
});
