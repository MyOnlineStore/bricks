import _R from 'react';
import { StyledComponentClass } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type ModalThemeType = {
    backgroundColor: string;
    backdropColor: string;
    borderRadius: string;
};

type ModalWrapperPropsType = {
    show: boolean;
};

const StyledModalWrapper = withProps<ModalWrapperPropsType>(styled.div)`
    transition: opacity 100ms;
    background: ${({ theme }): string => theme.Modal.backdropColor};
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ show }): string => (show ? 'opacity: 1;' : 'opacity: 0; pointer-events: none;')};
`;

const StyledModal = styled.div`
    margin: auto;
    max-width: 600px;
    width: 95%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 300px;
    min-width: 150px;
    height: 99%;
    overflow: hidden;
    max-height: calc(300px + (600 - 300) * (100vh - 300px) / (900 - 300));
    background: ${({ theme }): string => theme.Modal.backgroundColor};
    border-radius: ${({ theme }): string => theme.Modal.borderRadius};
`;

export default StyledModal;
export { ModalThemeType, StyledModalWrapper };
