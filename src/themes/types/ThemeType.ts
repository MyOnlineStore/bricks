import ButtonThemeType from './ButtonThemeType';

type ThemeType = {
    button:{
        destructive:ButtonThemeType;
        flat:ButtonThemeType;
        primary:ButtonThemeType;
        secondary:ButtonThemeType;
        warning:ButtonThemeType;
    };
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
