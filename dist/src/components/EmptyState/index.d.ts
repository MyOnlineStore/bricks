import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
declare type EmptyStatePropsType = {
    title: string;
    message: string;
};
declare const StyledEmptyState: _S<EmptyStatePropsType, _T, Pick<EmptyStatePropsType, "title" | "message"> & {
    theme?: _T | undefined;
}>;
export default StyledEmptyState;
export { EmptyStatePropsType };
