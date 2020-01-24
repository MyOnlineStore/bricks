import styled from '../../utility/styled';
import ThemeTools from '../../themes/ExperimentalCustomTheme/ThemeTools';

enum ModalSizes {
    small = '480px',
    medium = '792px',
    large = '1068px',
}

type ModalThemeType = {
    backgroundColor: string;
    backdropColor: string;
    borderRadius: string;
};

type ModalWrapperPropsType = {
    show: boolean;
};

const StyledModalWrapper = styled.div<ModalWrapperPropsType>`
    transition: opacity 100ms;
    background: ${({ theme }): string => theme.Modal.backdropColor};
    position: fixed;
    height: 100%;
    width: 100%;
    padding: 9px;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 800;

    ${({ show }): string => (show ? 'opacity: 1;' : 'opacity: 0; pointer-events: none;')};

    > * {
        max-width: 100%;
        max-height: 100%;
    }
`;

type ModalPropsType = {
    modalSize: keyof typeof ModalSizes;
};

const StyledModal = styled.div<ModalPropsType>`
    max-width: 100%;
    width: ${({ modalSize }): string => ModalSizes[modalSize]};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: calc(300px + 300 * (100vh - 300px) / 400);
    background: ${({ theme }): string => theme.Modal.backgroundColor};
    border-radius: ${({ theme }): string => theme.Modal.borderRadius};

    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
        height: 100vh;
    }
`;

const composeModalTheme = (themeTools: ThemeTools): ModalThemeType => {
    const { colors } = themeTools.themeSettings;

    return {
        backgroundColor: colors.silver.lighter1,
        backdropColor: 'rgba(0,0,0,0.3)',
        borderRadius: themeTools.calculateRoundness(20),
    };
};

export default StyledModal;
export { ModalThemeType, StyledModalWrapper, composeModalTheme };
