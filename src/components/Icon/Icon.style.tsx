import { StyledComponentClass as _S } from 'styled-components';
import styled from '../../utility/styled/styled';
import Icon from './Icon.template';

const StyledIcon = styled(Icon)`
    display: inline-block;
    vertical-align: middle;
    width: ${({ size }):string => size === 'large' ? '60px' : '18px'};

    svg {
        fill: ${({ theme, color }):string => color !== undefined ? color : theme.iconFill};
    }
`;

export default StyledIcon;
