import { OffsetShorthandType } from '../../types/OffsetType';
import { css } from '../styled';
import trbl, { TrblType } from '../trbl';

export type BoxProps = {
    $height?: string;
    $width?: string;
    $margin?: TrblType | OffsetShorthandType;
    $padding?: TrblType | OffsetShorthandType;
    $maxHeight?: string;
    $minHeight?: string;
    $maxWidth?: string;
    $minWidth?: string;
    $zIndex?: number;
    $position?: 'static' | 'relative' | 'fixed' | 'absolute';
    $top?: string;
    $right?: string;
    $bottom?: string;
    $left?: string;
};

/**
 * Helper that lets you filter out BoxProps from a set of props so
 * they can be spread on a component
 */
export const boxProps = <P extends BoxProps>(props: P): BoxProps => {
    return {
        $height: props.$height,
        $width: props.$width,
        $margin: props.$margin,
        $padding: props.$padding,
        $maxHeight: props.$maxHeight,
        $maxWidth: props.$maxWidth,
        $minWidth: props.$minWidth,
        $zIndex: props.$zIndex,
        $position: props.$position,
        $top: props.$top,
        $right: props.$right,
        $bottom: props.$bottom,
        $left: props.$left,
    };
};

const boxMixin = css<BoxProps>`
    box-sizing: border-box;
    height: ${({ $height }): string => ($height !== undefined ? $height : '')};
    width: ${({ $width }): string => ($width !== undefined ? $width : '')};
    max-height: ${({ $maxHeight }): string => ($maxHeight !== undefined ? $maxHeight : '')};
    min-height: ${({ $minHeight }): string => ($minHeight !== undefined ? $minHeight : '')};
    max-width: ${({ $maxWidth }): string => ($maxWidth !== undefined ? $maxWidth : '')};
    min-width: ${({ $minWidth }): string => ($minWidth !== undefined ? $minWidth : '')};
    ${({ $position }): string => ($position !== undefined ? `position: ${$position};` : '')}
    ${({ $top }): string => ($top !== undefined ? `top: ${$top};` : '')}
    ${({ $right }): string => ($right !== undefined ? `right: ${$right};` : '')}
    ${({ $bottom }): string => ($bottom !== undefined ? `bottom: ${$bottom};` : '')}
    ${({ $left }): string => ($left !== undefined ? `left: ${$left};` : '')}
    ${({ $zIndex }): string => ($zIndex ? `z-index: ${$zIndex};` : '')};
    ${({ $margin }): string => {
        if ($margin === undefined) return '';

        const shorthandMargin = Array.isArray($margin) ? trbl(...$margin) : $margin;

        return `
            margin-top: ${shorthandMargin.top};
            margin-right: ${shorthandMargin.right};
            margin-bottom: ${shorthandMargin.bottom};
            margin-left: ${shorthandMargin.left};
        `;
    }};
    ${({ $padding }): string => {
        if ($padding === undefined) return '';

        const shorthandPadding = Array.isArray($padding) ? trbl(...$padding) : $padding;

        return `
            padding-top: ${shorthandPadding.top};
            padding-right: ${shorthandPadding.right};
            padding-bottom: ${shorthandPadding.bottom};
            padding-left: ${shorthandPadding.left};
        `;
    }};
`;

export type FlexProps = {
    $order?: number;
    $direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    $justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'stretch'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    $alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
    $alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    $inline?: boolean;
    $wrap?: boolean;
    $grow?: number;
    $shrink?: number;
    $basis?: string;
};

/**
 * Helper that lets you filter out FlexProps from a set of props so
 * they can be spread on a component
 */

export const flexProps = <P extends FlexProps>(props: P): FlexProps => {
    return {
        $order: props.$order,
        $direction: props.$direction,
        $justifyContent: props.$justifyContent,
        $alignItems: props.$alignItems,
        $alignContent: props.$alignContent,
        $alignSelf: props.$alignSelf,
        $inline: props.$inline,
        $wrap: props.$wrap,
        $grow: props.$grow,
        $shrink: props.$shrink,
        $basis: props.$basis,
    };
};

const flexMixin = css<FlexProps>`
    box-sizing: border-box;
    display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
    flex-wrap: ${({ $wrap }) => ($wrap !== undefined && $wrap ? 'wrap' : '')};
    flex-direction: ${({ $direction }) => ($direction !== undefined ? $direction : '')};
    justify-content: ${({ $justifyContent }) => ($justifyContent !== undefined ? $justifyContent : '')};
    align-items: ${({ $alignItems }) => ($alignItems !== undefined ? $alignItems : '')};
    align-content: ${({ $alignContent }) => ($alignContent !== undefined ? $alignContent : '')};
    flex-grow: ${({ $grow }) => ($grow !== undefined ? $grow : '')};
    flex-shrink: ${({ $shrink }) => ($shrink !== undefined ? $shrink : '')};
    flex-basis: ${({ $basis }) => ($basis ? $basis : 'auto')};
    order: ${({ $order }) => ($order ? $order : '')};
    align-self: ${({ $alignSelf }) => ($alignSelf ? $alignSelf : '')};
`;

// These exports are a small hack to export the box and flex props along with
// the exported mixins
export const flex = flexMixin as typeof flexMixin & { props: FlexProps };
export const box = boxMixin as typeof boxMixin & { props: BoxProps };
