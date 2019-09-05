import React, { FC } from 'react';
import styled from 'styled-components';
import Box from '../Box';

type PropsType = {
    'data-testid'?: string;
    current: number;
    total: number;
    paginateBy?: number;
};

type DotsPropsType = {
    active: boolean;
    hide: boolean;
    small: boolean;
};

export const Step = styled.div<DotsPropsType>`
    transition: all 300ms;
    width: ${({ small, hide }) => {
        if (hide) return '0px';
        if (small) return '8px';

        return '12px';
    }};
    height: 12px;
    position: relative;

    &::before {
        transition: transform 300ms;
        content: '';
        border-radius: 50%;
        position: absolute;
        display: block;
        transform: scale(
            ${({ small, hide, active }) => {
                if (hide) return 0;
                if (small) return 0.5;
                if (active) return 1;

                return 0.8;
            }}
        );
        top: calc(50% - 6px);
        left: calc(50% - 6px);
        width: 9px;
        height: 9px;
        background: ${({ active }) => {
            if (active) {
                return 'red';
            }

            return 'grey';
        }};
    }
`;

const shouldShow = (index: number, props: PropsType): boolean => {
    const end = props.total - 1;
    const paginateBy = props.paginateBy || 5;

    /**
     * Show if the dots are within the first "page", and the current is still there as well.
     * With paginateBy = 5 and current= 1
     * o 0 o o o x x x
     */
    if (props.current < paginateBy / 2 && index < paginateBy) {
        return true;
    }

    /**
     * Show if the dots are within the last "page", and the current is there as well.
     * With total = 8 paginateBy = 5 and current = 1
     * x x x o 0 o o o
     */
    if (props.current > end - paginateBy / 2 && index > end - paginateBy) {
        return true;
    }

    /**
     * Show if the dots is within either side of the range defined by paginateBy.
     * With paginateBy = 5 (5 / 2 = 2.5 => 2 dots each):
     * x x o o 0 o o x x
     */
    if (index < props.current + paginateBy / 2 && index > props.current - paginateBy / 2) {
        return true;
    }

    return false;
};

const Progress: FC<PropsType> = props => {
    if (props.paginateBy && props.paginateBy % 2 === 0) {
        console.error('Progress "paginateBy" prop should be an uneven number to avoid visual bugs');
    }

    const steps = [];

    for (let index = 0; index < props.total; index++) {
        steps.push({
            id: index,
            hide: !shouldShow(index, props),
            active: index === props.current,
            small: true,
        });
    }

    const shownSteps = steps.filter(step => !step.hide);

    const mappedSteps = steps.map((step, index, arr) => ({
        ...step,
        small:
            index !== 0 &&
            index !== arr.length - 1 &&
            (index === shownSteps[0].id || index === shownSteps[shownSteps.length - 1].id),
    }));

    return (
        <Box data-testid={props['data-testid']} height="24px" alignItems="center">
            {mappedSteps.map(step => (
                <Step
                    data-testid={props['data-testid'] ? `${props['data-testid']}-step-${step.id}` : undefined}
                    key={step.id}
                    small={step.small}
                    active={step.active}
                    hide={step.hide}
                />
            ))}
        </Box>
    );
};
export default Progress;
