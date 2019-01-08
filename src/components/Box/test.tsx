import { shallow } from 'enzyme';
import React from 'react';
import Box from '.';
import trbl from '../../utility/trbl';
import 'jest-styled-components';

describe('Box', () => {
    it('aligns children to the right', () => {
        const component = shallow(<Box justifyContent="flex-end" />);

        expect(component).toHaveStyleRule('justify-content', 'flex-end');
    });

    it('aligns children in the center', () => {
        const component = shallow(<Box justifyContent="center" />);

        expect(component).toHaveStyleRule('justify-content', 'center');
    });

    it('aligns children to the bottom', () => {
        const component = shallow(<Box alignItems="flex-end" />);

        expect(component).toHaveStyleRule('align-items', 'flex-end');
    });

    it('aligns children in the vertical center', () => {
        const component = shallow(<Box alignItems="center" />);

        expect(component).toHaveStyleRule('align-items', 'center');
    });

    it('can change direction', () => {
        const component = shallow(<Box direction="column" />);

        expect(component).toHaveStyleRule('flex-direction', 'column');
    });

    it('can have a margin', () => {
        const component = shallow(<Box margin={trbl(24, 0, 'auto')} />);

        expect(component).toHaveStyleRule('margin-top', '24px');
        expect(component).toHaveStyleRule('margin-right', '0px');
        expect(component).toHaveStyleRule('margin-bottom', 'auto');
        expect(component).toHaveStyleRule('margin-left', '0px');
    });

    it('should be able to use a tuple as shorthand for margin', () => {
        const component = shallow(<Box margin={[24, 0, 'auto']} />);

        expect(component).toHaveStyleRule('margin-top', '24px');
        expect(component).toHaveStyleRule('margin-right', '0px');
        expect(component).toHaveStyleRule('margin-bottom', 'auto');
        expect(component).toHaveStyleRule('margin-left', '0px');
    });

    it('can have padding', () => {
        const component = shallow(<Box padding={trbl(24, 0, 'auto')} />);

        expect(component).toHaveStyleRule('padding-top', '24px');
        expect(component).toHaveStyleRule('padding-right', '0px');
        expect(component).toHaveStyleRule('padding-bottom', 'auto');
        expect(component).toHaveStyleRule('padding-left', '0px');
    });

    it('should be able to use a tuple as shorthand for padding', () => {
        const component = shallow(<Box padding={[24, 0, 'auto']} />);

        expect(component).toHaveStyleRule('padding-top', '24px');
        expect(component).toHaveStyleRule('padding-right', '0px');
        expect(component).toHaveStyleRule('padding-bottom', 'auto');
        expect(component).toHaveStyleRule('padding-left', '0px');
    });

    it('prevents wrapping of children', () => {
        const component = shallow(<Box wrap={false} />);

        expect(component).not.toHaveStyleRule('flex-wrap', expect.any(String));
    });

    it('stretches the children', () => {
        const component = shallow(<Box justifyContent="stretch" alignItems="stretch" alignContent="stretch" />);

        expect(component).toHaveStyleRule('justify-content', 'stretch');
    });

    it('can shrink', () => {
        const component = shallow(<Box shrink={1} />);

        expect(component).toHaveStyleRule('flex-shrink', '1');
    });

    it('can grow', () => {
        const component = shallow(<Box grow={1} />);

        expect(component).toHaveStyleRule('flex-grow', '1');
    });

    it('can have a specific size', () => {
        const component = shallow(<Box basis="calc(25% - 24px)" />);

        expect(component).toHaveStyleRule('flex-basis', 'calc(25% - 24px)');
    });

    it('can be rearranged by order', () => {
        const component = shallow(<Box order={1} />);

        expect(component).toHaveStyleRule('order', '1');
    });

    it('can align itself differently then its siblings', () => {
        const component = shallow(<Box alignSelf="flex-end" />);

        expect(component).toHaveStyleRule('align-self', 'flex-end');
    });

    it('should display as inline-flex when inline is set to true', () => {
        const component = shallow(<Box inline />);

        expect(component).toHaveStyleRule('display', 'inline-flex');
    });

    it('should have a maxHeight', () => {
        const component = shallow(<Box maxHeight={'100%'} />);

        expect(component).toHaveStyleRule('max-height', '100%');
    });

    it('should have a minHeight', () => {
        const component = shallow(<Box minHeight={'50px'} />);

        expect(component).toHaveStyleRule('min-height', '50px');
    });

    it('should have a maxWidth', () => {
        const component = shallow(<Box maxWidth={'100%'} />);

        expect(component).toHaveStyleRule('max-width', '100%');
    });

    it('should have a minWidth', () => {
        const component = shallow(<Box minWidth={'50px'} />);

        expect(component).toHaveStyleRule('min-width', '50px');
    });
});
