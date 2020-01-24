export type ThemeOptionsType = {
    colors: {
        background: string;
        backgroundContrast: string;
        primary: string;
        secondary: string;
        tertiary: string;
        textLight: string;
        textDark: string;
        severity: {
            error: string;
            success: string;
            info: string;
            warning: string;
        };
    };
    text: {
        primaryFont: string;
        secondaryFont: string;
        baseFontSize: number;
    };
    roundness: number; // number between 1 and 10, sorry no constraint available yet in typescript.
    buttonStyle: string;
    formColorScheme: 'auto' | 'light' | 'dark' | 'primary';
};

export type ProvidedThemeOptionsType = {
    colors: {
        background: string;
        backgroundContrast?: string;
        primary: string;
        secondary?: string;
        tertiary?: string;
        textLight: string;
        textDark: string;
        severity?: {
            error?: string;
            success?: string;
            info?: string;
            warning?: string;
        };
    };
    text?: {
        primaryFont?: string;
        secondaryFont?: string;
        baseFontSize?: number;
    };
    roundness?: number; // number between 1 and 10, sorry no constraint available yet in typescript.
    buttonStyle?: string;
    formColorScheme?: 'auto' | 'light' | 'dark' | 'primary';
};

export type ThemeColorType = {
    lighter1: string;
    base: string;
    darker1: string;
    darker2: string;
};

export type ThemeSilverColorType = {
    lighter1: string;
    base: string;
    darker1: string;
    darker2: string;
    darker3: string;
    darker4: string;
};

export type ThemeGreyColorType = {
    lighter3: string;
    lighter2: string;
    lighter1: string;
    base: string;
    darker1: string;
};

export type ThemeSeverityColorType = {
    error: string;
    success: string;
    info: string;
    warning: string;
};

export type ThemeFontSizeType = {
    smaller1: string;
    base: string;
    larger1: string;
    larger2: string;
    larger3: string;
    larger4: string;
    larger5: string;
    larger6: string;
    display: string;
};

export type ThemeLineHeightType = {
    base: string;
    larger1: string;
    larger2: string;
    larger3: string;
    larger4: string;
    larger5: string;
    larger6: string;
    small: string;
    medium: string;
    large: string;
    extralarge: string;
    display: string;
};

export type ThemeFontWeightType = {
    light: string;
    regular: string;
    bold: string;
};

export type ThemeFormsType = {
    formColorScheme: 'auto' | 'light' | 'dark' | 'primary';
    activeColor: string;
    activeBorderColor: string;
    borderRadius: string;
    borderColor: string;
    focusBorderColor: string;
    color: string;
    colorContrast: string;
    background: string;
    backgroundContrast: string;
};

export type ThemeSettingsType = {
    buttonShadow: string;
    buttonStyle: string;
    wcagContrastRatios: {
        backgroundToPrimary: number;
        backgroundToText: number;
        contrastBackgroundToText: number;
    };
    forms: ThemeFormsType;
    text: {
        colors: {
            textOnBackground: string;
        };
        fontSize: ThemeFontSizeType;
        lineHeight: ThemeLineHeightType;
        fontWeight: ThemeFontWeightType;
        primaryFont: string;
        secondaryFont: string;
    };
    colors: {
        background: string;
        contrastBackground: string;
        primary: ThemeColorType;
        secondary: ThemeColorType;
        tertiary: ThemeColorType;
        silver: ThemeSilverColorType;
        grey: ThemeGreyColorType;
        severity: ThemeSeverityColorType;
    };
};
