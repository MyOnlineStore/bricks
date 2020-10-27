import styled, { keyframes, css } from 'styled-components';
import chroma from 'chroma-js';
import { ContentProps } from '.';

const animateOverflow = keyframes`
    from { overflow: hidden; }
    to { overflow: visible; }
`;

const StyledFoldOut = styled.div`
    transition: height 300ms cubic-bezier(0.5, 0, 0.1, 1);
    height: ${(props: ContentProps): string => {
        if (props.previewHeight && !props.isOpen) {
            return `${props.previewHeight}px`;
        }

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

        if (props.previewHeight && !props.isOpen) {
            return css`
                overflow: hidden;
                position: relative;

                &:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    background: linear-gradient(
                        rgba(
                                ${chroma(props.backgroundColor || '#FFFFFF')
                                    .rgb()
                                    .join(',')},
                                0
                            )
                            50%,
                        rgba(
                                ${chroma(props.backgroundColor || '#FFFFFF')
                                    .rgb()
                                    .join(',')},
                                1
                            )
                            100%
                    );
                }
            `;
        }

        return 'overflow: hidden';
    }}
`;

export default StyledFoldOut;
