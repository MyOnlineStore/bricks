import ButtonThemeType from './ButtonThemeType';
import FlatButtonThemeType from './FlatButtonThemeType';

type ThemeType = {
    button:{
        destructive:ButtonThemeType;
        primary:ButtonThemeType;
        secondary:ButtonThemeType;
        warning:ButtonThemeType;
    };
    buttonDisabled:{
        backgroundColor1:string;
        backgroundColor2:string;
        color:string;
    };
    buttonFlat:FlatButtonThemeType;
    color:string;
    fontFamily:string;
    fontSize:string;
    headingColor:string;
    headingFontFamily:string;
    headingFontSize:string;
    iconFill:string;
    subHeadingColor:string;
    subHeadingFontFamily:string;
    subHeadingFontSize:string;
};

export default ThemeType;
