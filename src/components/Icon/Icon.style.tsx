import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled/styled';
import Icon from './Icon.template';

const StyledIcon = styled(Icon)`
    display: inline-block;
    vertical-align: middle;
    height: ${({ size }):string => size === 'large' ? '60px' : '18px'};
    width: ${({ size }):string => size === 'large' ? '60px' : '18px'};

    svg {
        max-height: 100%;
        max-width: 100%;
        fill: ${({ theme, color }):string => color !== undefined ? color : 'currentColor'};
    }
`;

export default StyledIcon;
