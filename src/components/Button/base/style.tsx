import styled from '../../../utility/styled';
import { PropsType } from '.';

const StyledButton = styled.button<PropsType>`
    border: none;
    display: inline-flex;
    outline: none;
    line-height: 1;
    cursor: ${({ loading }) => (loading ? 'default' : 'pointer')};
    appearance: none;
    user-select: none;
    position: relative;
    align-items: center;
    text-decoration: none;
    justify-content: center;
    transform: translateZ(0) translate3d(0, 0, 0);
    transition: transform 0.1s, background 0.3s, box-shadow 0.1s, border 0.3s;
    font-family: ${({ theme }): string => theme.Button.common.fontFamily};
    font-size: ${({ theme }): string => theme.Button.common.fontSize};
    font-weight: ${({ theme }): string => theme.Button.common.fontWeight};

    &::before {
        content: '';
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -2;
        opacity: 0;
        transition: opacity 0.3s;
    }

    &:disabled {
        cursor: default;
        border-color: transparent;
        opacity: 0.7;
        transform: none;
        box-shadow: none;

        &::before {
            opacity: 1;
        }
    }
`;

const StyledAnchor = StyledButton.withComponent('a');

export default StyledButton;
export { StyledAnchor };
