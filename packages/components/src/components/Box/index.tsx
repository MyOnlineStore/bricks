import React, { FunctionComponent } from 'react';
import { OffsetShorthandType } from '../../types/OffsetType';
import { FlexProps, BoxProps, flex, box } from '../../utility/box';
import styled from '../../utility/styled';
import { TrblType } from '../../utility/trbl';

const StyledBox = styled.div<FlexProps & BoxProps>`
    ${flex}
    ${box}
`;

/**  These props exist for backward compatibility */
type PropsType = BoxProps &
    FlexProps &
    JSX.IntrinsicElements['div'] & {
        as?: keyof JSX.IntrinsicElements;
        height?: string;
        width?: string;
        margin?: TrblType | OffsetShorthandType;
        padding?: TrblType | OffsetShorthandType;
        maxHeight?: string;
        minHeight?: string;
        maxWidth?: string;
        minWidth?: string;
        zIndex?: number;
        position?: 'static' | 'relative' | 'fixed' | 'absolute';
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
        order?: number;
        direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
        justifyContent?:
            | 'flex-start'
            | 'flex-end'
            | 'center'
            | 'stretch'
            | 'space-between'
            | 'space-around'
            | 'space-evenly';
        alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
        alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
        inline?: boolean;
        wrap?: boolean;
        grow?: number;
        shrink?: number;
        basis?: string;
        alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    };

const Box: FunctionComponent<PropsType> = props => {
    const { ref, ...filteredProps } = props;
    const mappedProps = Object.keys(filteredProps).reduce((acc, key) => {
        return {
            ...acc,
            [`$${key.replace('$', '')}`]: filteredProps[key as keyof typeof filteredProps],
        };
        // tslint:disable-next-line: no-any
    }, {} as any);

    return (
        // tslint:disable-next-line: no-any
        <StyledBox ref={ref} as={(props.inline ? 'span' : 'div') as any} {...mappedProps}>
            {props.children}
        </StyledBox>
    );
};

export { PropsType };
export default Box;
