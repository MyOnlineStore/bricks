declare enum ModalSizes {
    small = "480px",
    medium = "792px",
    large = "1068px"
}
declare type ModalThemeType = {
    backgroundColor: string;
    backdropColor: string;
    borderRadius: string;
};
declare type ModalWrapperPropsType = {
    show: boolean;
};
declare const StyledModalWrapper: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, ModalWrapperPropsType, never>;
declare type ModalPropsType = {
    modalSize: keyof typeof ModalSizes;
};
declare const StyledModal: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, ModalPropsType, never>;
export default StyledModal;
export { ModalThemeType, StyledModalWrapper };
