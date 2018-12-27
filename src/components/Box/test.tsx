import { shallow } from 'enzyme';
import React from 'react';
import Box from '.';
import trbl from '../../utility/trbl';

describe('Box', () => {
    it('aligns children to the right', () => {
        const component = shallow(<Box justifyContent="flex-end" />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('justify-content', 'flex-end');
        /* tslint:enable */
    });

    it('aligns children in the center', () => {
        const component = shallow(<Box justifyContent="center" />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('justify-content', 'center');
        /* tslint:enable */
    });

    it('aligns children to the bottom', () => {
        const component = shallow(<Box alignItems="flex-end" />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('align-items', 'flex-end');
        /* tslint:enable */
    });

    it('aligns children in the vertical center', () => {
        const component = shallow(<Box alignItems="center" />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('align-items', 'center');
        /* tslint:enable */
    });

    it('can change direction', () => {
        const component = shallow(<Box direction="column" />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('flex-direction', 'column');
        /* tslint:enable */
    });

    it('can have a margin', () => {
        const component = shallow(<Box margin={trbl(24, 0, 'auto')} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('margin-top', '24px');
        (expect(component) as any).toHaveStyleRule('margin-right', '0px');
        (expect(component) as any).toHaveStyleRule('margin-bottom', 'auto');
        (expect(component) as any).toHaveStyleRule('margin-left', '0px');
        /* tslint:enable */
    });

    it('should be able to use a tuple as shorthand for margin', () => {
        const component = shallow(<Box margin={[24, 0, 'auto']} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('margin-top', '24px');
        (expect(component) as any).toHaveStyleRule('margin-right', '0px');
        (expect(component) as any).toHaveStyleRule('margin-bottom', 'auto');
        (expect(component) as any).toHaveStyleRule('margin-left', '0px');
        /* tslint:enable */
    });

    it('can have padding', () => {
        const component = shallow(<Box padding={trbl(24, 0, 'auto')} />);

        /*tslint:disable */
        (expect(component) as any).toHaveStyleRule('padding-top', '24px');
        (expect(component) as any).toHaveStyleRule('padding-right', '0px');
        (expect(component) as any).toHaveStyleRule('padding-bottom', 'auto');
        (expect(component) as any).toHaveStyleRule('padding-left', '0px');
        /* tslint:enable */
    });

    it('should be able to use a tuple as shorthand for padding', () => {
        const component = shallow(<Box padding={[24, 0, 'auto']} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('padding-top', '24px');
        (expect(component) as any).toHaveStyleRule('padding-right', '0px');
        (expect(component) as any).toHaveStyleRule('padding-bottom', 'auto');
        (expect(component) as any).toHaveStyleRule('padding-left', '0px');
        /* tslint:enable */
    });

    it('prevents wrapping of children', () => {
        const component = shallow(<Box wrap={false} />);

        /* tslint:disable */
        (expect(component) as any).not.toHaveStyleRule('flex-wrap', expect.any(String));
        /* tslint:enable */
    });

    it('stretches the children', () => {
        const component = shallow(<Box justifyContent="stretch" alignItems="stretch" alignContent="stretch" />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('justify-content', 'stretch');
        /* tslint:enable */
    });

    it('can shrink', () => {
        const component = shallow(<Box shrink={1} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('flex-shrink', '1');
        /* tslint:enable */
    });

    it('can grow', () => {
        const component = shallow(<Box grow={1} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('flex-grow', '1');
        /* tslint:enable */
    });

    it('can have a specific size', () => {
        const component = shallow(<Box basis="calc(25% - 24px)" />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('flex-basis', 'calc(25% - 24px)');
        /* tslint:enable */
    });

    it('can be rearranged by order', () => {
        const component = shallow(<Box order={1} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('order', '1');
        /* tslint:enable */
    });

    it('can align itself differently then its siblings', () => {
        const component = shallow(<Box alignSelf="flex-end" />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('align-self', 'flex-end');
        /* tslint:enable */
    });

    it('should display as inline-flex when inline is set to true', () => {
        const component = shallow(<Box inline />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('display', 'inline-flex');
        /* tslint:enable */
    });

    it('should have a maxHeight', () => {
        const component = shallow(<Box maxHeight={'100%'} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('max-height', '100%');
        /* tslint:enable */
    });

    it('should have a minHeight', () => {
        const component = shallow(<Box minHeight={'50px'} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('min-height', '50px');
        /* tslint:enable */
    });

    it('should have a maxWidth', () => {
        const component = shallow(<Box maxWidth={'100%'} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('max-width', '100%');
        /* tslint:enable */
    });

    it('should have a minWidth', () => {
        const component = shallow(<Box minWidth={'50px'} />);

        /* tslint:disable */
        (expect(component) as any).toHaveStyleRule('min-width', '50px');
        /* tslint:enable */
    });
});
