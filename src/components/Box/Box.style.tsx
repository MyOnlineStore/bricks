import { StyledComponentClass as _S } from 'styled-components';
import { OffsetType } from '../../types/OffsetType';
import styled from '../../utility/styled';
import Box from './Box.template';

const StyledBox = styled(Box)`
    display: flex;
    height: ${({ height }):string => height !== undefined ? height : 'auto' };
    flex-wrap: ${({ wrap }):string => wrap ? 'wrap' : 'no-wrap'};
    flex-direction: ${({ direction }):string => direction !== undefined ? direction : 'row' };
    justify-content: ${({ justifyContent }):string => justifyContent !== undefined ? justifyContent : 'flex-start' };
    align-items: ${({ alignItems }):string => alignItems !== undefined ? alignItems : 'stretch' };
    align-content: ${({ alignContent }):string => alignContent !== undefined ? alignContent : 'stretch' };
    margin: ${({ margin }):string => {
        if (margin !== undefined) {
            const offsetValues = margin.map((value:OffsetType):string => {
                if (value === 'auto') {
                    return value;
                }

                return `${value}px`;
            });

            return offsetValues.join(' ');
        }

        return '0';
    }};
    flex-grow: ${({ grow }):number => grow ? grow : 0 };
    flex-shrink: ${({ shrink }):number => shrink ? shrink : 1 };
    flex-basis: ${({ basis }):string => basis ? basis : 'auto' };
    order: ${({ order }):number => order ? order : 0 };
    align-self: ${({ alignSelf }):string => alignSelf ? alignSelf : 'auto' };
`;

export default StyledBox;
