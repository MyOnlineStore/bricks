import { select, text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import generateThemeObject from '../../themes/CustomTheme/genTheme';
import { ProvidedThemeOptionsType } from '../../themes/CustomTheme/MerchantThemeTypes';
import CustomTheme from '../../themes/CustomTheme';
import SampleContent from './sampleContent';

storiesOf('CustomTheme', module).add('Default', () => {
    const primaryFont = select(
        'Primary Font',
        ['Roboto Mono', 'Roboto Slab', 'Margarine', 'Indie Flower', 'Anton'],
        'Roboto Mono',
        'Fonts',
    );
    const secondaryFont = select(
        'Secondary Font',
        ['Roboto Mono', 'Roboto Slab', 'Margarine', 'Indie Flower', 'Anton'],
        'Roboto Mono',
        'Fonts',
    );
    const buttonStyle = select('Button Style', ['flat', 'floating', 'deep'], 'deep', 'Theme specifics');
    const formColorScheme = select('Form Color Scheme', ['auto', 'light', 'dark', 'primary'], 'auto', 'Colors');
    const background = text('Background Color', '#FFFFFF', 'Colors');
    const primary = text('Primary Color', '#ee4266', 'Colors');
    const secondary = text('Secondary Color', '#fcd307', 'Colors');
    const tertiary = text('Tertiary Color', '#1c1259', 'Colors');
    const textLight = text('Light Text', '#FFFFFF', 'Colors');
    const textDark = text('Dark Text', '#1c1259', 'Colors');

    const error = text('Severity: Error', '#CC0000', 'Colors');
    const success = text('Severity: Success', '#31953d', 'Colors');
    const info = text('Severity: Info', '#999999', 'Colors');
    const warning = text('Severity: Warning', '#fcc200', 'Colors');

    const roundness = number(
        'Roundness',
        0,
        {
            range: true,
            min: 0,
            max: 10,
            step: 0.5,
        },
        'Sizes',
    );
    const baseFontSize = number(
        'Base Font Size',
        15,
        {
            range: true,
            min: 14,
            max: 22,
            step: 1,
        },
        'Sizes',
    );
    const h3TextColor = text('H3 Text Color', 'red', 'Theme specifics');
    const h1FontSize = number(
        'H1 Font Size',
        36,
        {
            range: true,
            min: 10,
            max: 50,
            step: 1,
        },
        'Theme specifics',
    );

    const themeOptions: ProvidedThemeOptionsType = {
        colors: {
            background,
            primary,
            secondary,
            tertiary,
            textLight,
            textDark,
            severity: {
                error,
                success,
                info,
                warning,
            },
        },
        text: {
            primaryFont,
            secondaryFont,
            baseFontSize,
        },
        roundness,
        buttonStyle,
        formColorScheme,
    };

    const [theme, themeSettings] = generateThemeObject(themeOptions, {
        Heading: {
            1: {
                fontSize: `${h1FontSize}px`,
            },
            3: {
                color: h3TextColor,
            },
        },
    });

    return (
        <CustomTheme theme={theme}>
            <SampleContent themeSettings={themeSettings} />
        </CustomTheme>
    );
});
