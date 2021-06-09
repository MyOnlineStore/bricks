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
    const {
        height,
        width,
        margin,
        padding,
        maxHeight,
        minHeight,
        maxWidth,
        minWidth,
        zIndex,
        position,
        top,
        right,
        bottom,
        left,
        order,
        direction,
        justifyContent,
        alignItems,
        alignContent,
        inline,
        wrap,
        grow,
        shrink,
        basis,
        alignSelf,
        ref,
        ...filteredProps
    } = props;

    /** tslint:disable: no-any */
    return (
        <StyledBox
            ref={ref}
            as={(props.inline ? 'span' : 'div') as any}
            $height={height}
            $width={width}
            $margin={margin}
            $padding={padding}
            $maxHeight={maxHeight}
            $minHeight={minHeight}
            $maxWidth={maxWidth}
            $minWidth={minWidth}
            $zIndex={zIndex}
            $position={position}
            $top={top}
            $right={right}
            $bottom={bottom}
            $left={left}
            $order={order}
            $direction={direction}
            $justifyContent={justifyContent}
            $alignItems={alignItems}
            $alignContent={alignContent}
            $wrap={wrap}
            $grow={grow}
            $shrink={shrink}
            $basis={basis}
            $alignSelf={alignSelf}
            {...filteredProps}
        >
            {props.children}
        </StyledBox>
    );
};

export { PropsType };
export default Box;
