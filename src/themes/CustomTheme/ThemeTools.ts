import chroma from 'chroma-js';
import * as ThemeTypes from './CustomThemeTypes';

class ThemeTools {
    private options: ThemeTypes.ThemeOptionsType;
    private primaryColors: ThemeTypes.ThemeColorType;
    private secondaryColors: ThemeTypes.ThemeColorType;
    private tertiaryColors: ThemeTypes.ThemeColorType;
    private silverColors: ThemeTypes.ThemeSilverColorType;
    private greyColors: ThemeTypes.ThemeGreyColorType;
    public themeSettings: ThemeTypes.ThemeSettingsType;

    constructor(options: ThemeTypes.ThemeOptionsType) {
        this.options = options;
        this.primaryColors = this.calculateColorScales(options.colors.primary);
        this.secondaryColors = this.calculateColorScales(options.colors.secondary);
        this.tertiaryColors = this.calculateColorScales(options.colors.tertiary);
        this.silverColors = this.calculateSilverColors(options.colors.background);
        this.greyColors = this.calculateGreyColors(options.colors.background);

        this.composeThemeSettingsObject();
    }

    private composeThemeSettingsObject = () => {
        this.themeSettings = {
            buttonShadow: this.getButtonStyle(),
            buttonStyle: this.options.buttonStyle,
            wcagContrastRatios: {
                backgroundToPrimary: parseFloat(
                    chroma.contrast(this.options.colors.background, this.primaryColors.base).toFixed(2),
                ),
                backgroundToText: parseFloat(
                    chroma
                        .contrast(
                            this.options.colors.background,
                            this.calculateContrastTextColor(this.options.colors.background),
                        )
                        .toFixed(2),
                ),
                contrastBackgroundToText: parseFloat(
                    chroma
                        .contrast(
                            this.options.colors.backgroundContrast,
                            this.calculateContrastTextColor(this.options.colors.background),
                        )
                        .toFixed(2),
                ),
            },
            forms: this.calculateFormSettings(),
            text: {
                colors: {
                    textOnBackground: this.calculateContrastTextColor(this.options.colors.background),
                },
                fontSize: this.calculateFontSizes(this.options.text.baseFontSize),
                lineHeight: this.calculateLineHeights(this.options.text.baseFontSize),
                fontWeight: {
                    light: '300',
                    regular: '400',
                    bold: '700',
                },
                primaryFont: this.options.text.primaryFont,
                secondaryFont: this.options.text.secondaryFont,
            },
            colors: {
                background: this.options.colors.background,
                contrastBackground: this.options.colors.backgroundContrast,
                primary: this.primaryColors,
                secondary: this.secondaryColors,
                tertiary: this.tertiaryColors,
                silver: this.silverColors,
                grey: this.greyColors,
                severity: {
                    error: this.options.colors.severity.error,
                    success: this.options.colors.severity.success,
                    info: this.options.colors.severity.info,
                    warning: this.options.colors.severity.warning,
                },
            },
        };

        return this.themeSettings;
    };

    private calculateGreyColors = (background: string): ThemeTypes.ThemeGreyColorType => {
        const greyBase = chroma.mix('#333', background, 0.2);

        return {
            lighter3: greyBase.brighten(2).hex(),
            lighter1: greyBase.brighten(1.2).hex(),
            lighter2: greyBase.brighten(0.6).hex(),
            base: greyBase.hex(),
            darker1: greyBase.darken(0.5).hex(),
        };
    };

    private calculateSilverColors = (background: string): ThemeTypes.ThemeSilverColorType => {
        const silverBase = chroma.mix('#F7F7F7', background, 0.1);

        return {
            lighter1: '#ffffff',
            base: silverBase.hex(),
            darker1: silverBase.darken(0.4).hex(),
            darker2: silverBase.darken(0.8).hex(),
            darker3: silverBase.darken(1.2).hex(),
            darker4: silverBase.darken(1.6).hex(),
        };
    };

    private calculateColorScales = (baseColor: string): ThemeTypes.ThemeColorType => {
        const colorLumi = chroma(baseColor).luminance() < 0.3;

        return {
            lighter1: chroma(baseColor)
                .set('hsl.l', colorLumi ? '/1.5' : '*1.2')
                .hex(),
            base: baseColor,
            darker1: chroma(baseColor)
                .set('hsl.l', colorLumi ? '*1.2' : '/1.5')
                .hex(),
            darker2: chroma(baseColor)
                .set('hsl.l', colorLumi ? '*1.4' : '/2')
                .hex(),
        };
    };

    private getButtonStyle = (): string => {
        switch (this.options.buttonStyle) {
            case 'flat':
                return '';
            case 'floating':
                return '0 2px 3px rgba(0,0,0,0.2)';
            case 'deep':
            default:
                return '0 -2px 0 rgba(0,0,0,0.2) inset';
        }
    };

    private calculateFontSizes = (baseFontSize: number): ThemeTypes.ThemeFontSizeType => {
        return {
            smaller1: `${baseFontSize * 0.8}px`,
            base: `${baseFontSize}px`,
            larger1: `${baseFontSize * 1}px`,
            larger2: `${baseFontSize * 1.2}px`,
            larger3: `${baseFontSize * 1.4}px`,
            larger4: `${baseFontSize * 1.6}px`,
            larger5: `${baseFontSize * 2}px`,
            larger6: `${baseFontSize * 2.4}px`,
            display: `${baseFontSize * 4}px`,
        };
    };

    private calculateLineHeights = (baseFontSize: number): ThemeTypes.ThemeLineHeightType => {
        const baseLineHeight = baseFontSize * 1.4;

        return {
            base: `${baseLineHeight}px`,
            larger1: `${baseLineHeight * 0.85}px`,
            larger2: `${baseLineHeight * 1}px`,
            larger3: `${baseLineHeight * 1.28}px`,
            larger4: `${baseLineHeight * 1.42}px`,
            larger5: `${baseLineHeight * 1.71}px`,
            larger6: `${baseLineHeight * 2.14}px`,
            small: `${baseLineHeight * 0.8}px`,
            medium: `${baseLineHeight}px`,
            large: `${baseLineHeight * 1.2}px`,
            extralarge: `${baseLineHeight * 1.4}px`,
            display: `${baseLineHeight * 3.57}px`,
        };
    };

    private calculateFormSettings = (): ThemeTypes.ThemeFormsType => {
        const isDarkForm = chroma(this.options.colors.background).luminance() < 0.1;

        const baseFormSettings = {
            formColorScheme: this.options.formColorScheme,
            activeColor: this.primaryColors.base,
            activeBorderColor: chroma(this.primaryColors.base)
                .darken(0.4)
                .hex(),
            borderRadius: this.calculateRoundness(20),
            borderColor: isDarkForm ? this.greyColors.lighter1 : this.silverColors.darker4,
            focusBorderColor: this.primaryColors.darker2,
            color: this.calculateContrastTextColor(
                isDarkForm ? this.options.colors.textDark : this.options.colors.textLight,
            ),
            colorContrast: this.calculateContrastTextColor(isDarkForm ? this.greyColors.base : this.silverColors.base),
            background: isDarkForm ? this.greyColors.darker1 : this.silverColors.lighter1,
            backgroundContrast: isDarkForm ? this.greyColors.base : this.silverColors.base,
        };

        switch (this.options.formColorScheme) {
            case 'light':
                return {
                    ...baseFormSettings,
                    borderColor: this.silverColors.darker4,
                    color: this.calculateContrastTextColor(this.options.colors.textLight),
                    colorContrast: this.calculateContrastTextColor(this.silverColors.base),
                    background: this.silverColors.lighter1,
                    backgroundContrast: this.silverColors.base,
                };
            case 'dark':
                return {
                    ...baseFormSettings,
                    borderColor: this.greyColors.lighter1,
                    color: this.calculateContrastTextColor(this.options.colors.textDark),
                    colorContrast: this.calculateContrastTextColor(this.greyColors.base),
                    background: this.greyColors.darker1,
                    backgroundContrast: this.greyColors.base,
                };
            case 'primary':
                return {
                    ...baseFormSettings,
                    borderColor: this.primaryColors.darker2,
                    color: this.primaryColors.base,
                    colorContrast: this.primaryColors.darker1,
                    background: isDarkForm ? this.greyColors.darker1 : this.silverColors.lighter1,
                    backgroundContrast: isDarkForm ? this.greyColors.base : this.silverColors.base,
                };
            default:
            case 'auto':
                return {
                    ...baseFormSettings,
                    borderColor: isDarkForm ? this.greyColors.lighter1 : this.silverColors.darker4,
                    color: this.calculateContrastTextColor(
                        isDarkForm ? this.options.colors.textDark : this.options.colors.textLight,
                    ),
                    colorContrast: this.calculateContrastTextColor(
                        isDarkForm ? this.greyColors.base : this.silverColors.base,
                    ),
                    background: isDarkForm ? this.greyColors.darker1 : this.silverColors.lighter1,
                    backgroundContrast: isDarkForm ? this.greyColors.base : this.silverColors.base,
                };
        }
    };

    /**
     * This function returns an offset color that is either lighter or darker than the provided color,
     * depending on the luminance of the provided color.
     *
     * @param colorStr - string - base color
     * @param darken - float between 0 and 1 - amount to darken
     * @param brighten - float between 0 and 1 - amount to brighten
     */
    public calculateOffsetColor = (colorStr: string, darken: number, brighten: number): string => {
        const chromaColor = chroma(colorStr);

        if (chromaColor.luminance() > 0.4) {
            return chromaColor.darken(darken).hex();
        }

        return chromaColor.brighten(brighten).hex();
    };

    /**
     * This function returns either a dark or light color that has the best contrast on the provided color
     *
     * @param colorStr - string - base color
     * @param darkColor - string - darker color to return if luminance >= .4
     * @param lightColor - string - lighter color to return if luminance < .4
     */
    public calculateContrastColor = (colorStr: string, darkColor: string, lightColor: string): string => {
        const chromaColor = chroma(colorStr);

        if (chromaColor.luminance() < 0.4) {
            return lightColor;
        }

        return darkColor;
    };

    /**
     * This function returns either the dark or light textcolor that has the best contrast on the color provided
     */
    public calculateContrastTextColor = (colorStr: string): string => {
        return this.calculateContrastColor(colorStr, this.options.colors.textDark, this.options.colors.textLight);
    };

    /**
     * This function calculates the border-radius for an element, given a maximum amount of pixel size.
     * The formula will return a px value based on the roundness defined in the theme options.
     */
    public calculateRoundness = (max: number): string => {
        return `${max * (this.options.roundness / 10)}px`;
    };
}

export default ThemeTools;
