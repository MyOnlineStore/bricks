import styled from '../../../utility/styled';
import { PropsType } from '.';

const StyledButton = styled.button<PropsType & { isLoading?: boolean }>`
    align-items: center;
    appearance: none;
    background: none;
    border: none;
    box-shadow: none;
    cursor: ${({ isLoading }) => (isLoading ? 'progress' : 'pointer')};
    display: inline-flex;
    font-family: ${({ theme }): string => theme.Button.common.fontFamily};
    font-size: ${({ theme }): string => theme.Button.common.fontSize};
    font-weight: ${({ theme }): string => theme.Button.common.fontWeight};
    justify-content: center;
    line-height: 24px;
    outline: none;
    margin: 0;
    padding: 0;
    position: relative;
    text-decoration: none;
    transform: translateZ(0) translate3d(0, 0, 0);
    transition: transform 0.1s, background 0.3s, box-shadow 0.1s, border 0.3s;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &:disabled {
        cursor: not-allowed;
        transform: none;
    }
`;

const StyledAnchor = StyledButton.withComponent('a');

export default StyledButton;
export { StyledAnchor };
