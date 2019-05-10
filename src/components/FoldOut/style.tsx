import styled from 'styled-components';
import { ContentProps } from '.';

const StyledFoldOut = styled.div`
    transition: height 300ms cubic-bezier(0.5, 0, 0.1, 1);
    overflow: hidden;
    height: ${(props: ContentProps): string => {
        if (!props.isOpen) {
            return '0';
        }

        if (props.contentHeight !== undefined) {
            return `${props.contentHeight}px`;
        }

        return 'auto';
    }};
`;

export default StyledFoldOut;
