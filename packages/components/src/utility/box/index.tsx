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

export const box = css<BoxProps>`
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
    $inline?: boolean;
    $wrap?: boolean;
    $grow?: number;
    $shrink?: number;
    $basis?: string;
    $alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

export const flex = css<FlexProps>`
    box-sizing: border-box;
    display: ${({ $inline }): string => ($inline ? 'inline-flex' : 'flex')};
    flex-wrap: ${({ $wrap }): string => ($wrap !== undefined && $wrap ? 'wrap' : '')};
    flex-direction: ${({ $direction }): string => ($direction !== undefined ? $direction : '')};
    justify-content: ${({ $justifyContent }): string => ($justifyContent !== undefined ? $justifyContent : '')};
    align-items: ${({ $alignItems }): string => ($alignItems !== undefined ? $alignItems : '')};
    align-content: ${({ $alignContent }): string => ($alignContent !== undefined ? $alignContent : '')};
    flex-grow: ${({ $grow }): number => ($grow ? $grow : 0)};
    flex-shrink: ${({ $shrink }): number => ($shrink !== undefined ? $shrink : 1)};
    flex-basis: ${({ $basis }): string => ($basis ? $basis : 'auto')};
    order: ${({ $order }): number => ($order ? $order : 0)};
    align-self: ${({ $alignSelf }): string => ($alignSelf ? $alignSelf : '')};
`;
