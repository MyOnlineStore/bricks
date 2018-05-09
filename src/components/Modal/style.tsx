import _R from 'react';
import { StyledComponentClass } from 'styled-components';
import _T from '../../types/ThemeType';
import styled, { withProps } from '../../utility/styled';

type ModalThemeType = {};

type ModalWrapperPropsType = {
    show: boolean;
};

const StyledModalWrapper = withProps<ModalWrapperPropsType>(styled.div)`
    transition: all 300ms;
    background: rgba(0, 0, 0, 0.3);
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
    background: #fff;
    border-radius: 5px;
    margin: auto;
    max-width: 600px;
    width: 95%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    height: calc(200px + (600 - 200) * (100vh - 300px) / (900 - 300));
    max-height: 99%;
    overflow: hidden;
`;

export default StyledModal;
export { ModalThemeType, StyledModalWrapper };
