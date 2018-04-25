import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import BoxItem from './BoxItem.template';
import formatOffset from './formatters/formatOffset';

const StyledBoxItem = styled(BoxItem)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: ${({ vertical }):string => {
        switch (vertical) {
            case undefined:
            case 'top': return 'flex-start';
            case 'bottom': return 'flex-end';
            default: return vertical;
        }
    }};
    align-items: ${({ horizontal }):string => {
        switch (horizontal) {
            case undefined:
            case 'left': return 'flex-start';
            case 'right': return 'flex-end';
            default: return horizontal;
        }
    }};
    align-content: ${({ horizontal }):string => {
        switch (horizontal) {
            case undefined:
            case 'left': return 'flex-start';
            case 'right': return 'flex-end';
            default: return horizontal;
        }
    }};

    && {
        flex-grow: ${({ grow }):string => grow ? '1' : '0'};
        flex-shrink: ${({ shrink }):string => shrink ? '1' : '0'};
        flex-basis: ${({ size }):string => size};
        margin: ${({ gutter }):string => gutter !== undefined ? formatOffset(gutter) : '0' };
    }

    > * {
        flex-grow: ${({ vertical }):number => vertical === 'stretch' ? 1 : 0};
        flex-shrink: 1;
    }
`;

export default StyledBoxItem;
