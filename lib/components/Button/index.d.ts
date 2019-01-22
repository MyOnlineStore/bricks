import React, { ReactNode } from 'react';
import { PropsType as BareButtonPropsType } from './base';
import { MediumPropsType } from '../Icon';
declare type DefaultTypes = {
    backgroundColor: string;
    color: string;
    boxShadow: string;
};
declare type ComponentStateTypes = {
    idle: DefaultTypes;
    hover: DefaultTypes;
    focus: DefaultTypes;
    active: DefaultTypes;
};
declare type ButtonThemeType = {
    common: {
        borderRadius: string;
        borderWidth: string;
        fontWeight: string;
        fontFamily: string;
        fontSize: string;
        textDecoration: string;
    };
    primary: ComponentStateTypes;
    secondary: ComponentStateTypes;
    warning: ComponentStateTypes;
    destructive: ComponentStateTypes;
    plain: {
        hover: DefaultTypes;
        focus: DefaultTypes;
        active: DefaultTypes;
        idle: {
            backgroundColor: string;
            color: string;
            boxShadow: string;
            textDecoration: string;
        };
    };
    disabled: {
        backgroundColor: string;
        color: string;
        stripingColor: string;
    };
};
declare type PropsType = BareButtonPropsType & {
    loading?: boolean;
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    compact?: boolean;
    disabled?: boolean;
    icon?: MediumPropsType['icon'];
    children?: ReactNode;
};
declare const Button: import("styled-components").StyledComponent<React.FunctionComponent<BareButtonPropsType>, import("../../types/ThemeType").default, {
    children: {} | React.ReactElement<any>;
} & BareButtonPropsType & {
    loading?: boolean | undefined;
    variant: import("../Toaster").ButtonVariant;
    compact?: boolean | undefined;
    disabled?: boolean | undefined;
    icon?: "archive" | "arrowDownCircle" | "arrowDown" | "arrowLeftCircle" | "arrowLeft" | "arrowRightCircle" | "arrowRight" | "arrowUpCircle" | "ban" | "barChart" | "barcode" | "barsCircle" | "bars" | "bellSlash" | "bell" | "book" | "bookmark" | "bullet" | "bullseye" | "calculator" | "calendar" | "camera" | "caretDown" | "caretLeft" | "caretRight" | "caretUp" | "caretVertical" | "cartArrow" | "cartPlus" | "cart" | "cash" | "ccDinersclub" | "ccMastercard" | "ccVisa" | "certificate" | "checkmarkCircleAlt" | "checkmarkCircle" | "checkmarkSquare" | "checkmark" | "chevronDownCircle" | "chevronDownSquare" | "chevronDown" | "chevronLeftCircle" | "chevronLeftSquare" | "chevronLeft" | "chevronRightCircle" | "chevronRightSquare" | "chevronRight" | "chevronUpCircle" | "chevronUpSquare" | "chevronUp" | "clipboard" | "clock" | "close" | "cloudDownload" | "cloudUpload" | "cloud" | "code" | "comment" | "comments" | "compress" | "copy" | "creditCard" | "crossCircle" | "crosshairs" | "cube" | "cubes" | "dangerCircleAlt" | "dangerCircle" | "dangerTriangleAlt" | "dangerTriangle" | "dashboard" | "desktop" | "download" | "editSquare" | "ellipsisH" | "ellipsisV" | "emptyCircle" | "expandAlt" | "expand" | "externalLinkSquare" | "eyeSlash" | "eye" | "eyedropper" | "facebook" | "fileCode" | "fileExcel" | "fileImage" | "fileMusic" | "filePdf" | "fileText" | "fileVideo" | "fileWord" | "fileZip" | "file" | "film" | "filter" | "flagCheckered" | "flagO" | "flag" | "folderOpen" | "folder" | "frown" | "gear" | "gift" | "globe" | "gridAlt" | "gridView" | "grid" | "handGrab" | "handPointer" | "handStop" | "heartO" | "heart" | "home" | "image" | "inbox" | "infoCircle" | "instagram" | "key" | "keyboard" | "laptop" | "lifeBouy" | "lightbulb" | "lineChart" | "link" | "listAlt" | "listOl" | "list" | "locked" | "mail" | "mapMarker" | "mapSign" | "map" | "meh" | "minusCircle" | "minusSquare" | "minus" | "mobile" | "moveHorizontal" | "moveVertical" | "move" | "newspaper" | "ordersAlt" | "ordersAlt2" | "orders" | "paperclip" | "paste" | "pencil" | "phone" | "pieChart" | "pinterest" | "plug" | "plusCircle" | "plusSquare" | "plus" | "powerOff" | "printer" | "puzzle" | "qrcode" | "questionCircle" | "receipt" | "recycle" | "reload" | "rocket" | "rotateLeft" | "rotateRight" | "search" | "send" | "server" | "shield" | "signIn" | "signOut" | "sitemap" | "sliders" | "smile" | "sortAlphaAsc" | "sortAlphaDesc" | "sortAmountAsc" | "sortAmountDesc" | "sortNumericAsc" | "sortNumericDesc" | "starEmpty" | "starHalfEmpty" | "starHalf" | "star" | "stock" | "store" | "tablet" | "tag" | "tags" | "thumbTack" | "thumbsDown" | "thumbsUp" | "trash" | "truck" | "twitter" | "undo" | "unlink" | "unlocked" | "user" | "users" | "youtube" | "zoomIn" | "zoomOut" | undefined;
    children?: React.ReactNode;
}, "children">;
export default Button;
export { PropsType, ButtonThemeType };
