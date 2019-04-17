import { PropsType } from '.';
import { TrblType } from '../../utility/trbl';
import styled from '../../utility/styled';

type BoxPropsType = PropsType & {
    flexWrap?: PropsType['wrap'];
    elementHeight?: PropsType['height'];
    elementWidth?: PropsType['width'];
    elementMaxHeight?: PropsType['height'];
    elementMinHeight?: PropsType['minHeight'];
    elementMaxWidth?: PropsType['maxWidth'];
    elementMinWidth?: PropsType['minWidth'];
    flexDirection?: PropsType['direction'];
    flexOrder?: PropsType['order'];
    margin?: TrblType;
    padding?: TrblType;
};

const StyledDiv = styled.div<BoxPropsType>`
    box-sizing: border-box;
    display: ${({ inline }): string => (inline ? 'inline-flex' : 'flex')};
    height: ${({ elementHeight }): string => (elementHeight !== undefined ? elementHeight : '')};
    width: ${({ elementWidth }): string => (elementWidth !== undefined ? elementWidth : '')};
    max-height: ${({ elementMaxHeight }): string => (elementMaxHeight !== undefined ? elementMaxHeight : '')};
    min-height: ${({ elementMinHeight }): string => (elementMinHeight !== undefined ? elementMinHeight : '')};
    max-width: ${({ elementMaxWidth }): string => (elementMaxWidth !== undefined ? elementMaxWidth : '')};
    min-width: ${({ elementMinWidth }): string => (elementMinWidth !== undefined ? elementMinWidth : '')};
    flex-wrap: ${({ flexWrap }): string => (flexWrap !== undefined && flexWrap ? 'wrap' : '')};
    flex-direction: ${({ flexDirection }): string => (flexDirection !== undefined ? flexDirection : '')};
    justify-content: ${({ justifyContent }): string => (justifyContent !== undefined ? justifyContent : '')};
    align-items: ${({ alignItems }): string => (alignItems !== undefined ? alignItems : '')};
    align-content: ${({ alignContent }): string => (alignContent !== undefined ? alignContent : '')};
    ${({ margin }): string => {
        if (margin === undefined) return '';

        return `
            margin-top: ${margin.top};
            margin-right: ${margin.right};
            margin-bottom: ${margin.bottom};
            margin-left: ${margin.left};
        `;
    }};
    ${({ padding }): string => {
        if (padding === undefined) return '';

        return `
            padding-top: ${padding.top};
            padding-right: ${padding.right};
            padding-bottom: ${padding.bottom};
            padding-left: ${padding.left};
        `;
    }};
    flex-grow: ${({ grow }): number => (grow ? grow : 0)};
    flex-shrink: ${({ shrink }): number => (shrink !== undefined ? shrink : 1)};
    flex-basis: ${({ basis }): string => (basis ? basis : 'auto')};
    order: ${({ flexOrder }): number => (flexOrder ? flexOrder : 0)};
    align-self: ${({ alignSelf }): string => (alignSelf ? alignSelf : '')};
    ${({ position }): string => (position !== undefined ? `position: ${position}` : '')};
    ${({ top }): string => (top !== undefined ? `top: ${top}` : '')};
    ${({ right }): string => (right !== undefined ? `right: ${right}` : '')};
    ${({ bottom }): string => (bottom !== undefined ? `bottom: ${bottom}` : '')};
    ${({ left }): string => (left !== undefined ? `left: ${left}` : '')};
`;

const StyledSpan = StyledDiv.withComponent('span');

export { StyledDiv, StyledSpan, BoxPropsType };
