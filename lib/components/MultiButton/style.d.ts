/// <reference types="react" />
declare type MultiButtonThemeType = {
    window: {
        backgroundColor: string;
        secondaryColor: string;
        borderColor: string;
        borderRadius: string;
        boxShadow: string;
    };
    button: {
        common: {
            active: {
                boxShadow: string;
            };
            borderRadius: string;
        };
        primary: {
            dividerColor: string;
        };
        secondary: {
            dividerColor: string;
        };
        warning: {
            dividerColor: string;
        };
        destructive: {
            dividerColor: string;
        };
        plain: {
            dividerColor: string;
        };
        disabled: {
            dividerColor: string;
        };
    };
};
declare type PropsType = {
    open: boolean;
};
declare const StyledMultiButton: import("styled-components").StyledComponent<import("react").FunctionComponent<import("../Button/base").PropsType>, import("../../types/ThemeType").default, {
    children: {} | import("react").ReactElement<any>;
} & import("../Button/base").PropsType & {
    loading?: boolean | undefined;
    variant: import("../Toaster").ButtonVariant;
    compact?: boolean | undefined;
    disabled?: boolean | undefined;
    icon?: "archive" | "arrowDownCircle" | "arrowDown" | "arrowLeftCircle" | "arrowLeft" | "arrowRightCircle" | "arrowRight" | "arrowUpCircle" | "ban" | "barChart" | "barcode" | "barsCircle" | "bars" | "bellSlash" | "bell" | "book" | "bookmark" | "bullet" | "bullseye" | "calculator" | "calendar" | "camera" | "caretDown" | "caretLeft" | "caretRight" | "caretUp" | "caretVertical" | "cartArrow" | "cartPlus" | "cart" | "cash" | "ccDinersclub" | "ccMastercard" | "ccVisa" | "certificate" | "checkmarkCircleAlt" | "checkmarkCircle" | "checkmarkSquare" | "checkmark" | "chevronDownCircle" | "chevronDownSquare" | "chevronDown" | "chevronLeftCircle" | "chevronLeftSquare" | "chevronLeft" | "chevronRightCircle" | "chevronRightSquare" | "chevronRight" | "chevronUpCircle" | "chevronUpSquare" | "chevronUp" | "clipboard" | "clock" | "close" | "cloudDownload" | "cloudUpload" | "cloud" | "code" | "comment" | "comments" | "compress" | "copy" | "creditCard" | "crossCircle" | "crosshairs" | "cube" | "cubes" | "dangerCircleAlt" | "dangerCircle" | "dangerTriangleAlt" | "dangerTriangle" | "dashboard" | "desktop" | "download" | "editSquare" | "ellipsisH" | "ellipsisV" | "emptyCircle" | "expandAlt" | "expand" | "externalLinkSquare" | "eyeSlash" | "eye" | "eyedropper" | "facebook" | "fileCode" | "fileExcel" | "fileImage" | "fileMusic" | "filePdf" | "fileText" | "fileVideo" | "fileWord" | "fileZip" | "file" | "film" | "filter" | "flagCheckered" | "flagO" | "flag" | "folderOpen" | "folder" | "frown" | "gear" | "gift" | "globe" | "gridAlt" | "gridView" | "grid" | "handGrab" | "handPointer" | "handStop" | "heartO" | "heart" | "home" | "image" | "inbox" | "infoCircle" | "instagram" | "key" | "keyboard" | "laptop" | "lifeBouy" | "lightbulb" | "lineChart" | "link" | "listAlt" | "listOl" | "list" | "locked" | "mail" | "mapMarker" | "mapSign" | "map" | "meh" | "minusCircle" | "minusSquare" | "minus" | "mobile" | "moveHorizontal" | "moveVertical" | "move" | "newspaper" | "ordersAlt" | "ordersAlt2" | "orders" | "paperclip" | "paste" | "pencil" | "phone" | "pieChart" | "pinterest" | "plug" | "plusCircle" | "plusSquare" | "plus" | "powerOff" | "printer" | "puzzle" | "qrcode" | "questionCircle" | "receipt" | "recycle" | "reload" | "rocket" | "rotateLeft" | "rotateRight" | "search" | "send" | "server" | "shield" | "signIn" | "signOut" | "sitemap" | "sliders" | "smile" | "sortAlphaAsc" | "sortAlphaDesc" | "sortAmountAsc" | "sortAmountDesc" | "sortNumericAsc" | "sortNumericDesc" | "starEmpty" | "starHalfEmpty" | "starHalf" | "star" | "stock" | "store" | "tablet" | "tag" | "tags" | "thumbTack" | "thumbsDown" | "thumbsUp" | "trash" | "truck" | "twitter" | "undo" | "unlink" | "unlocked" | "user" | "users" | "youtube" | "zoomIn" | "zoomOut" | undefined;
    children?: import("react").ReactNode;
}, "children">;
declare const StyledChevronButton: import("styled-components").StyledComponent<import("react").FunctionComponent<import("../Button/base").PropsType>, import("../../types/ThemeType").default, {
    children: {} | import("react").ReactElement<any>;
} & import("../Button/base").PropsType & {
    loading?: boolean | undefined;
    variant: import("../Toaster").ButtonVariant;
    compact?: boolean | undefined;
    disabled?: boolean | undefined;
    icon?: "archive" | "arrowDownCircle" | "arrowDown" | "arrowLeftCircle" | "arrowLeft" | "arrowRightCircle" | "arrowRight" | "arrowUpCircle" | "ban" | "barChart" | "barcode" | "barsCircle" | "bars" | "bellSlash" | "bell" | "book" | "bookmark" | "bullet" | "bullseye" | "calculator" | "calendar" | "camera" | "caretDown" | "caretLeft" | "caretRight" | "caretUp" | "caretVertical" | "cartArrow" | "cartPlus" | "cart" | "cash" | "ccDinersclub" | "ccMastercard" | "ccVisa" | "certificate" | "checkmarkCircleAlt" | "checkmarkCircle" | "checkmarkSquare" | "checkmark" | "chevronDownCircle" | "chevronDownSquare" | "chevronDown" | "chevronLeftCircle" | "chevronLeftSquare" | "chevronLeft" | "chevronRightCircle" | "chevronRightSquare" | "chevronRight" | "chevronUpCircle" | "chevronUpSquare" | "chevronUp" | "clipboard" | "clock" | "close" | "cloudDownload" | "cloudUpload" | "cloud" | "code" | "comment" | "comments" | "compress" | "copy" | "creditCard" | "crossCircle" | "crosshairs" | "cube" | "cubes" | "dangerCircleAlt" | "dangerCircle" | "dangerTriangleAlt" | "dangerTriangle" | "dashboard" | "desktop" | "download" | "editSquare" | "ellipsisH" | "ellipsisV" | "emptyCircle" | "expandAlt" | "expand" | "externalLinkSquare" | "eyeSlash" | "eye" | "eyedropper" | "facebook" | "fileCode" | "fileExcel" | "fileImage" | "fileMusic" | "filePdf" | "fileText" | "fileVideo" | "fileWord" | "fileZip" | "file" | "film" | "filter" | "flagCheckered" | "flagO" | "flag" | "folderOpen" | "folder" | "frown" | "gear" | "gift" | "globe" | "gridAlt" | "gridView" | "grid" | "handGrab" | "handPointer" | "handStop" | "heartO" | "heart" | "home" | "image" | "inbox" | "infoCircle" | "instagram" | "key" | "keyboard" | "laptop" | "lifeBouy" | "lightbulb" | "lineChart" | "link" | "listAlt" | "listOl" | "list" | "locked" | "mail" | "mapMarker" | "mapSign" | "map" | "meh" | "minusCircle" | "minusSquare" | "minus" | "mobile" | "moveHorizontal" | "moveVertical" | "move" | "newspaper" | "ordersAlt" | "ordersAlt2" | "orders" | "paperclip" | "paste" | "pencil" | "phone" | "pieChart" | "pinterest" | "plug" | "plusCircle" | "plusSquare" | "plus" | "powerOff" | "printer" | "puzzle" | "qrcode" | "questionCircle" | "receipt" | "recycle" | "reload" | "rocket" | "rotateLeft" | "rotateRight" | "search" | "send" | "server" | "shield" | "signIn" | "signOut" | "sitemap" | "sliders" | "smile" | "sortAlphaAsc" | "sortAlphaDesc" | "sortAmountAsc" | "sortAmountDesc" | "sortNumericAsc" | "sortNumericDesc" | "starEmpty" | "starHalfEmpty" | "starHalf" | "star" | "stock" | "store" | "tablet" | "tag" | "tags" | "thumbTack" | "thumbsDown" | "thumbsUp" | "trash" | "truck" | "twitter" | "undo" | "unlink" | "unlocked" | "user" | "users" | "youtube" | "zoomIn" | "zoomOut" | undefined;
    children?: import("react").ReactNode;
}, "children">;
declare const StyledWrapper: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, PropsType, never>;
declare const StyledWindow: import("styled-components").StyledComponent<"div", import("../../types/ThemeType").default, PropsType, never>;
export default StyledMultiButton;
export { StyledMultiButton, StyledWrapper, StyledWindow, StyledChevronButton, MultiButtonThemeType };
