import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import styled from '../../utility/styled';
import Icon, { PropsType } from './Icon.template';

const StyledIcon = styled(Icon)`
    display: inline-block;
    vertical-align: middle;
    height: ${(props: PropsType): string =>
        props.size === 'large' ? '60px' : '18px'};
    width: ${(props: PropsType): string =>
        props.size === 'large' ? '60px' : '18px'};

    svg {
        max-height: 100%;
        max-width: 100%;
        fill: ${(props: PropsType): string =>
            props.color !== undefined ? props.color : 'currentColor'};
    }
`;

export default StyledIcon;
