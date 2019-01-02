type DefaultTypes = {
    backgroundColor: string;
    color: string;
    boxShadow: string;
};

type ComponentStateTypes = {
    idle: DefaultTypes;
    hover: DefaultTypes;
    focus: DefaultTypes;
    active: DefaultTypes;
};

type ButtonThemeType = {
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

export { ButtonThemeType };
