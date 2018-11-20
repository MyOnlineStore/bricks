import _R from 'react';
import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
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
declare const StyledModalWrapper: _S<ModalWrapperPropsType & _R.HTMLProps<HTMLElement>, _T, ModalWrapperPropsType & _R.HTMLProps<HTMLElement>>;
declare type ModalPropsType = {
    modalSize: keyof typeof ModalSizes;
};
declare const StyledModal: _S<ModalPropsType & _R.HTMLProps<HTMLElement>, _T, ModalPropsType & _R.HTMLProps<HTMLElement>>;
export default StyledModal;
export { ModalThemeType, StyledModalWrapper };
