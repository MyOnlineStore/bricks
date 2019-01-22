declare type TableThemeType = {
    default: {
        backgroundColor: string;
    };
    row: {
        default: {
            backgroundColor: string;
            borderColor: string;
        };
        hover: {
            backgroundColor: string;
        };
        focus: {
            borderColor: string;
        };
        dragging: {
            boxShadow: string;
        };
    };
    cell: {
        default: {
            backgroundColor: string;
            borderColor: string;
        };
        header: {
            backgroundColor: string;
        };
    };
};
declare const StyledTable: import("styled-components").StyledComponent<"table", import("../../types/ThemeType").default, {}, never>;
export default StyledTable;
export { StyledTable, TableThemeType };
