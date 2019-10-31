import styled from '../../../utility/styled';
import { PropsType } from '.';

const StyledButton = styled.button<PropsType & { 'data-loading': string }>`
    align-items: center;
    appearance: none;
    background: none;
    border: none;
    cursor: ${props => (props['data-loading'] === 'true' ? 'default' : 'pointer')};
    display: inline-flex;
    font-family: ${({ theme }): string => theme.Button.common.fontFamily};
    font-size: ${({ theme }): string => theme.Button.common.fontSize};
    font-weight: ${({ theme }): string => theme.Button.common.fontWeight};
    justify-content: center;
    line-height: 1;
    outline: none;
    padding: 0;
    position: relative;
    text-decoration: none;
    transform: translateZ(0) translate3d(0, 0, 0);
    transition: transform 0.1s, background 0.3s, box-shadow 0.1s, border 0.3s;
    user-select: none;

    &:disabled {
        border-color: transparent;
        box-shadow: none;
        cursor: default;
        opacity: 0.7;
        transform: none;

        &::before {
            opacity: 1;
        }
    }
`;

const StyledAnchor = StyledButton.withComponent('a');

export default StyledButton;
export { StyledAnchor };
