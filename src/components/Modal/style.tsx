import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
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
    padding: 12px;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ show }): string => (show ? 'opacity: 1;' : 'opacity: 0; pointer-events: none;')};

    > * {
        max-width: 100%;
        max-height: 100%;
    }
`;

const StyledModal = styled.div`
    max-width: 100%;
    width: 792px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 300px;
    height: calc(100% - 24px);
    overflow: hidden;
    max-height: calc(300px + (600 - 300) * (100vh - 300px) / (900 - 300));
    background: ${({ theme }): string => theme.Modal.backgroundColor};
    border-radius: ${({ theme }): string => theme.Modal.borderRadius};
`;

export default StyledModal;
export { ModalThemeType, StyledModalWrapper };
