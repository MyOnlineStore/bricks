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

type ButtonThemeType = {
    backgroundColor:{
        default:string;
        hover:string;
        focus:string;
        active:string;
    };
    borderColor:{
        default:string;
        hover:string;
        focus:string;
        active:string;
    };
    borderRadius:string;
    borderWidth:string;
    color:{
        default:string;
        hover:string;
        focus:string;
        active:string;
    };
};

const adminTheme:ThemeType = {
    button: {
        destructive: {
            backgroundColor: {
                default: '#ED2157',
                hover: '#ED2157',
                focus: '#ED2157',
                active: '#ED2157',
            },
            borderColor: {
                default: '#ED2157',
                hover: '#ED2157',
                focus: '#ED2157',
                active: '#ED2157',
            },
            borderRadius: '0',
            borderWidth: '1px',
            color: {
                default: '#fff',
                hover: '#fff',
                focus: '#fff',
                active: '#fff',
            }
        },
        flat: {
            backgroundColor: {
                default: 'transparent',
                hover: 'transparent',
                focus: 'transparent',
                active: 'transparent',
            },
            borderColor: {
                default: 'transparent',
                hover: '#d2d7e0',
                focus: '#d2d7e0',
                active: '#d2d7e0',
            },
            borderRadius: '0',
            borderWidth: '1px',
            color: {
                default: '#21252B',
                hover: '#21252B',
                focus: '#21252B',
                active: '#21252B',
            }
        },
        primary: {
            backgroundColor: {
                default: '#5BD16A',
                hover: '#5BD16A',
                focus: '#5BD16A',
                active: '#5BD16A',
            },
            borderColor: {
                default: '#5BD16A',
                hover: '#5BD16A',
                focus: '#5BD16A',
                active: '#5BD16A',
            },
            borderRadius: '0',
            borderWidth: '1px',
            color: {
                default: '#fff',
                hover: '#fff',
                focus: '#fff',
                active: '#fff',
            }
        },
        secondary: {
            backgroundColor: {
                default: '#EDEFF2',
                hover: '#EDEFF2',
                focus: '#EDEFF2',
                active: '#EDEFF2',
            },
            borderColor: {
                default: '#d2d7e0',
                hover: '#d2d7e0',
                focus: '#d2d7e0',
                active: '#d2d7e0',
            },
            borderRadius: '0',
            borderWidth: '1px',
            color: {
                default: '#333740',
                hover: '#333740',
                focus: '#333740',
                active: '#333740',
            }
        },
        warning: {
            backgroundColor: {
                default: '#FCC200',
                hover: '#FCC200',
                focus: '#FCC200',
                active: '#FCC200',
            },
            borderColor: {
                default: '#FCC200',
                hover: '#FCC200',
                focus: '#FCC200',
                active: '#FCC200',
            },
            borderRadius: '0',
            borderWidth: '1px',
            color: {
                default: '#fff',
                hover: '#fff',
                focus: '#fff',
                active: '#fff',
            }
        },
    },
    color: '#55656D',
    fontFamily: 'Arial',
    fontSize: '16px',
    headingColor: '#21252B',
    headingFontFamily: 'Arial',
    headingFontSize: '28px',
    iconFill: '#5BD16A',
    subHeadingColor: '#21252B',
    subHeadingFontFamily: 'Arial',
    subHeadingFontSize: '20px',
};

export { ThemeType, ButtonThemeType, adminTheme };
