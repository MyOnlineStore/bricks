import ButtonThemeType from './ButtonThemeType';
import FlatButtonThemeType from './FlatButtonThemeType';
import NotificationThemeType from './NotificationThemeType';

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
    notification:{
        success:NotificationThemeType;
        error:NotificationThemeType;
        warning:NotificationThemeType;
        info:NotificationThemeType;
    };
    color:string;
    fontFamily:string;
    fontSize:string;
    headingColor:string;
    headingFontFamily:string;
    headingFontSize:string;
    iconFill:string;
    priceTag:{
        default:{
            color:string;
            fontFamily:string;
            fontSize:string;
            fontWeight:string;

            sup:{
                fontSize:string;
                fontWeight:string;
            };
        };
        action:{
            color:string;
            fontFamily:string;
            fontSize:string;
            fontWeight:string;

            sup:{
                fontSize:string;
                fontWeight:string;
            };
        };
    };
    subHeadingColor:string;
    subHeadingFontFamily:string;
    subHeadingFontSize:string;
};

export default ThemeType;
