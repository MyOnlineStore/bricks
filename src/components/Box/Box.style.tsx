import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled';
import Box from './Box.template';
import formatOffset from './formatters/formatOffset';

const StyledBox = styled(Box)`
    display: flex;
    height: 100%;
    flex-wrap: ${({ wrap }):string => wrap ? 'wrap' : 'no-wrap'};
    flex-direction: row;
    justify-content: ${({ horizontal }):string => {
        switch (horizontal) {
            case undefined:
            case 'left': return 'flex-start';
            case 'right': return 'flex-end';
            default: return horizontal;
        }
    }};
    align-items: ${({ vertical }):string => {
        switch (vertical) {
            case undefined:
            case 'top': return 'flex-start';
            case 'bottom': return 'flex-end';
            default: return vertical;
        }
    }};
    align-content: ${({ vertical }):string => {
        switch (vertical) {
            case undefined:
            case 'top': return 'flex-start';
            case 'bottom': return 'flex-end';
            default: return vertical;
        }
    }};
    margin: ${({ bleed }):string => bleed !== undefined ? formatOffset(bleed) : '0'};

    > * {
        flex-grow: ${({ horizontal }):number => horizontal === 'stretch' ? 1 : 0};
        flex-shrink: 1;
    }
`;

export default StyledBox;
