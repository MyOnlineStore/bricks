import React from 'react';
import { mount } from 'enzyme';
import MosTheme from '../../themes/MosTheme';
import Progress from '.';
import { Step } from './style';

describe('Progress', () => {
    beforeEach(() => {
        // tslint:disable-next-line:no-any
        (global as any).console = {
            error: jest.fn(),
        };
    });
    it('should be testable with a data-testid', () => {
        const component = mount(
            <MosTheme>
                <Progress data-testid="progress" current={0} total={5} />
            </MosTheme>,
        );

        expect(component.find('[data-testid="progress"]').hostNodes().length).toBe(1);
        expect(component.find('[data-testid^="progress-step"]').hostNodes().length).toBe(5);
    });

    it('should show the correct amount of steps', () => {
        const component = mount(
            <MosTheme>
                <Progress data-testid="progress" current={0} total={4} />
            </MosTheme>,
        );

        expect(component.find(Step).filterWhere(node => node.prop('hide') !== true).length).toBe(4);
    });

    it('should paginate after 5 by default', () => {
        const component = mount(
            <MosTheme>
                <Progress data-testid="progress" current={0} total={10} />
            </MosTheme>,
        );

        expect(component.find(Step).filterWhere(node => node.prop('hide') !== true).length).toBe(5);
    });

    it('should paginate after the specified amount', () => {
        const component = mount(
            <MosTheme>
                <Progress data-testid="progress" current={0} total={10} paginateBy={7} />
            </MosTheme>,
        );

        expect(component.find(Step).filterWhere(node => node.prop('hide') !== true).length).toBe(7);
    });

    it('should show the current step as active', () => {
        const component = mount(
            <MosTheme>
                <Progress data-testid="progress" current={9} total={10} paginateBy={7} />
            </MosTheme>,
        );

        expect(
            component
                .find(Step)
                .at(9)
                .prop('active'),
        ).toBe(true);
    });

    it('should log an error to the console when paginating by an even number', () => {
        mount(
            <MosTheme>
                <Progress data-testid="progress" current={0} total={10} paginateBy={6} />
            </MosTheme>,
        );

        expect(console.error).toHaveBeenCalledWith(
            'Progress "paginateBy" prop should be an uneven number to avoid visual bugs',
        );
    });
});
