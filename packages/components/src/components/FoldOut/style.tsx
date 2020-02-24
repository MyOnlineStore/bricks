import styled, { keyframes, css } from 'styled-components';
import { ContentProps } from '.';

const animateOverflow = keyframes`
    from { overflow: hidden; }
    to { overflow: visible; }
`;

const StyledFoldOut = styled.div`
    transition: height 300ms cubic-bezier(0.5, 0, 0.1, 1);
    height: ${(props: ContentProps): string => {
        if (!props.isOpen) {
            return '0';
        }

        if (props.contentHeight !== undefined) {
            return `${props.contentHeight}px`;
        }

        return 'auto';
    }};

    ${(props: ContentProps) => {
        if (props.isOpen) {
            return css`
                overflow: visible;
                animation: 500ms ${animateOverflow};
            `;
        }

        return 'overflow: hidden';
    }}
`;

export default StyledFoldOut;
